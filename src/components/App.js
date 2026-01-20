
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  const tooltip = 'This is body';
  const tooltipText ='This is Tooltip text';
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip tooltip= {tooltip} tooltipText={tooltipText} />
    </div>
  )
}

export default App
