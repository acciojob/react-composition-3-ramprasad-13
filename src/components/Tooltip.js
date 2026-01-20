import React, { useState } from "react";

function Tooltip({ text, children }) {
    const [display, setDisplay] = useState(false);

    // Explicitly set true/false. 
    // This is safer than toggling (!prev) for hover events.
    function showTooltip() {
        setDisplay(true);
    }

    function hideTooltip() {
        setDisplay(false);
    }

    return (
        // The container gets the class 'tooltip' and handles the mouse events
        <div 
            className="tooltip" 
            onMouseEnter={showTooltip} 
            onMouseLeave={hideTooltip}
        >
            {/* Render the element (children) that triggers the tooltip */}
            {children}

            {/* Render the tooltip text */}
            <span className={`tooltiptext ${display ? 'show' : 'hide'}`}>
                {text}
            </span>
        </div>
    )
}

export default Tooltip;