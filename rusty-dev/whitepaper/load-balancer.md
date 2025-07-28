# **Whitepaper: Load Balancing in RustyConnector**

## **1. Introduction**
Load balancing is a crucial component in distributed systems, ensuring efficient resource utilization and optimized performance. RustyConnector’s `LoadBalancer` implementation provides a flexible and extensible balancing mechanism, handling server selection based on criteria such as weighting, persistence, and player count.

This document explores the inner mechanics of RustyConnector’s `LoadBalancer` class, its underlying logic, and the motivations behind its architectural decisions.

## **2. Core Architecture**
### **2.1 Storage Providers**
The internal components of the LoadBalancer's storage is as follows:
- `ConcurrentHashMap<String, Server>` | The master record. Tracks all servers in the load balancer based on their ID.
- `Set<String>` | A record containing the ID of all locked servers. The Set is backed by a ConcurrentHashMap.
- `Vector<Server>` | The record containing all unlocked servers. This record 

These storage providers handle requests in a combination of ways providing the following operations:
<table>
    <tr>
        <td>GET SERVER (via ID)</td><td><code>O(1) - O(log n)</code>*+</td>
    </tr>
    <tr>
        <td>CONTAINS SERVER (via ID)</td><td><code>O(1) - O(log n)</code>*</td>
    </tr>
    <tr>
        <td>REMOVE A LOCKED SERVER</td><td><code>O(1) - O(log n)</code></td>
    </tr>
    <tr>
        <td>REMOVE AN UNLOCKED SERVER</td><td><code>O(n)</code></td>
    </tr>
    <tr>
        <td>IS SERVER LOCKED/UNLOCKED</td><td><code>O(1) - O(log n)</code>*</td>
    </tr>
    <tr>
        <td>ADD SERVER</td><td><code>O(1) - O(n)</code></td>
    </tr>
    <tr>
        <td>FETCH IDEAL SERVER</td><td><code>O(1)</code></td>
    </tr>
    <tr>
        <td>LOCK/UNLOCK SERVER</td><td><code>O(n)</code></td>
    </tr>
    <tr>
        <td>FETCH LOCKED SERVERS</td><td><code>O(n) - O(n log n)</code> - We decided that the potential for `O(n log n)` on bucket collisions isn't a concern when considering how infrequently fetching a whole list of locked servers is actually needed.</td>
    </tr>
    <tr>
        <td>FETCH UNLOCKED SERVERS</td><td><code>O(n)</code></td>
    </tr>
</table>

> \* Because of it's high variance, if ServerID is a UUID, time complexity of (O(1) - O(log n)) operations will almost always be O(1) as bucket collisions are minimal.

> \+ Fetching a specific server via a criteria other than ID is not supported by the LoadBalancer. You can get an immutable copy of the underlying map to perform more specific actions on, but that isn't a concern here.

As you can see, the storage proivider schema has specifically been optimized for near-instant read operations, while also maintaining good (un)locked metadata checking speeds, and sortability for unlocked servers.
A side-effect in many cases is improved operations in other areas such as removing servers.

### **2.2 Handling Connections**
The topic of load balancing is one where the solution is an inverse of the question.
The question in this case is "Given a specific resource balancing policy, how do we send a request to the best resource for the job."
The solution is not to take a request and *then* look for a resource to handle it. But to instead pre-determine what resource will handle the *next* request; then when a request arrives, you already have the resource ready to handle it.

To provide this service to the client, the LoadBalancer maintains an internal cursor over the unlocked server `Vector`.
Assuming the `Vector` is not empty, any time a request is received, the `FETCH IDEAL SERVER` action will be performed which causes the cursor to return the Server it's currently pointing to.
Once the cursor has provided a server to handle the incoming request. The cursor will iterate to the next resource in the `Vector` assuming the balancing policy allows it to.
Assuming the cursor reaches the end of the `Vector` it will start from the beginning again.

The cursor specifically provides the ability to instantly return a server to handle a player's connection.
However, by itself, the cursor doesn't do a very good job complying with the balancing policy because it can't validate the entire server list.
It shouldn't have to either, the cursor's purpose is exclusivly to return a server instantly to the player.
It *can* have some extra logic to decide when it iterates to the next server in the list, but it shouldn't be performing any other checks on the server collection.

### **2.3 Handling Connection Variance**
As networks persist through time, a collection of servers will inevitably enter various states where an incrementing cursor isn't capable of satisfying a balancing policy by itself.

To solve this issue, the LoadBalancer has an internal process that regularally evaluates the entire collection of unlocked servers and sorts them in accordance with the balancing policy.
Once the internal process has finished; the collection will be sorted from best to worst. The server at the beginning will be the best possible choice for handling the next player connection.
Additionally, once the process has finished evaluating the entire colleciton, it'll reset the curor to point to the very first server in the collection.

From that point forward, the cursor can simply increment as it normally does.
The combination of the cursor's incrementing logic, and the sorting process, allows the LoadBalancer to instantly provide the best server to handler a player's connection, while also reacting to network invariance.

## **3. Load Balancing Strategies**
### **3.1 Persistence Management**
One of the key features is its persistence mechanism, which attempts multiple connections before failing. This prevents immediate dropouts if a server is momentarily unresponsive. The logic follows:
```java
if (!this.persistent()) return 0;
return this.attempts;
```
This ensures retries are only attempted when persistence is enabled.

### **3.2 Weighted & Unweighted Sorting**
The sorting behavior is defined through the following:
```java
if(this.weighted()) WeightedQuickSort.sort(this.unlockedServers);
else QuickSort.sort(this.unlockedServers);
```
Here, **WeightedQuickSort** prioritizes servers based on their predefined weight values, whereas **QuickSort** simply orders them based on fundamental properties.

### **3.3 Dynamic Index Selection**
Rather than statically assigning servers, RustyConnector implements an **iterator mechanism**, ensuring each server is rotated efficiently:
```java
this.index += 1;
if (this.index >= this.unlockedServers.size()) this.index = 0;
```
This prevents inefficient sticky connections by automatically iterating forward.

## **4. Event-Driven Design**
A standout feature is its reliance on **event-based balancing**, enhancing modularity and configurability. Before locking or unlocking a server, RustyConnector fires events:
```java
boolean canceled = RC.P.EventManager().fireEvent(new ServerLockedEvent(server.family().orElseThrow(), server)).get(1, TimeUnit.MINUTES);
```
This ensures external modules can hook into the balancing system, making it highly extensible.

## **5. Least Connection Strategy**
The `LeastConnection` implementation refines the base balancing logic by selecting servers based on real-time player occupancy:
```java
Server thisItem = this.unlockedServers.get(this.index);
Server theNextItem = this.unlockedServers.get(this.index + 1);
if (thisItem.players() >= theNextItem.players()) this.index++;
```
This guarantees that the **least loaded server** is prioritized.

## **6. Design Considerations & Optimization**
- **Thread-Safety:** Usage of concurrent collections ensures safe access across multiple players.
- **Automatic Sorting:** Ensures that load balancing remains dynamic and adaptive rather than static.
- **Extensibility:** Metadata storage allows additional properties to be attached without modifying core logic.
- **Graceful Locking & Unlocking:** The balancing system prevents immediate lockouts by allowing event-driven interventions.

## **7. Conclusion**
RustyConnector’s `LoadBalancer` is a well-crafted module integrating persistence, weighting, and event-driven adaptability into a single, extensible system. The `LeastConnection` strategy further optimizes server selection to prevent bottlenecks. With thread safety and modularity as fundamental principles, this design is robust enough for scalable deployments.
