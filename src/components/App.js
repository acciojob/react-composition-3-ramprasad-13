import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Pass the actual content as 'children' (between the tags) */}
        {/* Pass the tooltip message as 'text' prop */}
        <Tooltip text="This is Tooltip text">
            This is body
        </Tooltip>

        {/* You can now reuse it easily: */}
        <br /><br />
        <Tooltip text="Another tip">
            Hover over me too!
        </Tooltip>
    </div>
  )
}

export default App;