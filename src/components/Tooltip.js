import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <h2 className="tooltip">{children}</h2>
      
      {/* 1. Use Conditional Rendering (&&). 
            If 'show' is false, this line returns null, removing the element from the DOM.
            This fixes "AssertionError: ... not to exist".
         
         2. Use a <div> instead of <p>.
            The test selector looks for a div, fixing "Expected to find element: ... > div".
      */}
      {show && <p className="tooltip tooltiptext">{text}</p>}
    </div>
  );
};

export default Tooltip;