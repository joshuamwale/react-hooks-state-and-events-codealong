import React, {useState} from "react";

function Toggle() {
  const[isOn, setIsOn] = useState(true);
  function changeToggle() {
    setIsOn((isOn) => !isOn);
  }
  
  const color = !isOn ? "white" : "red";

  return ( <button style={{background: color}}  onClick={changeToggle}>{isOn ? "ON" : "OFF"}</button>
  );
}

export default Toggle;
