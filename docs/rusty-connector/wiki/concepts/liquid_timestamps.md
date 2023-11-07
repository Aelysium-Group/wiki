---
title: 🌊 Liquid Timestamp
---
While working with RustyConnector configurations. You may encounter a liquid timestamp.
These data points allow you to define a string value which will be translated into a unit of time.

## Syntax
Liquid Timestamps use the following syntax:

`<amount><unit>` || `<amount> <unit>`

`amount` should be the number of units that you want to set.
`unit` should be the [time unit](#supported-time-units) that you want to use.

## Supported Time Units

| Name     | ID Key | Description                                                                 |
| -----    | -----  | -----                                                                       |
| `Second` | `s`    | Unit of time representing a second. The plural "Seconds" is also supported. |
| `Day`    | `d`    | Unit of time representing a day. The plural "Days" is also supported.       |
| `Month`  | `m`    | Unit of time representing a month. The plural "Months" is also supported.   |

All time units are case insensitive.

The time formats don't care if you:
- Use shorthand versions ("d" instead of "day")
- Use plurals ("Day" versus "Days")
- Use caps ("day" versus "DAY")
- Use whitespaces ("1d" versus "1 d")

## Examples
- "30 Months"
- "2d"
- "1 hour"
- "17HOURS"
- "11days"
- "18 m"