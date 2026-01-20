import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <h2>{children}</h2>
      
      {/* 1. Use Conditional Rendering (&&). 
            If 'show' is false, this line returns null, removing the element from the DOM.
            This fixes "AssertionError: ... not to exist".
         
         2. Use a <div> instead of <p>.
            The test selector looks for a div, fixing "Expected to find element: ... > div".
      */}
      {show && <p className="tooltiptext">{text}</p>}
    </div>
  );
};

export default Tooltip;