import React, { useState } from "react";

function Tooltip(props){
    const {tooltip, tooltipText} = props;
    const [display, setDisplay] = useState(false);

    function handleDisplay(){
        setDisplay((prev)=>!prev)
    }

    return (
        <div className="tooltip">
            <p className={`tooltiptext ${display?'show':'hide' }`}>{tooltipText}</p>
            <p onMouseEnter={handleDisplay} onMouseLeave={handleDisplay} className="tooltip" >{tooltip}</p>
        </div>
    )

}

export default Tooltip;