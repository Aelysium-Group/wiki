import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ToggleComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        const savedState = Cookies.get('toggleState');
        if (savedState) {
            setIsEnabled(savedState === 'true');
        }
    }, []);

    const handleToggle = () => {
        const newState = !isEnabled;
        setIsEnabled(newState);
        Cookies.set('toggleState', newState.toString());
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={isEnabled} onChange={handleToggle} />
                Toggle
            </label>
            {isEnabled ? (
                <div>
                    {/* Second set of child components */}
                    <p>Second set of components</p>
                </div>
            ) : (
                <div>
                    {/* First set of child components */}
                    <p>First set of components</p>
                </div>
            )}
        </div>
    );
};

export default ToggleComponent;