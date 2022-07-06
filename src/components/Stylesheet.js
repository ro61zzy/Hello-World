import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  //using props to apply styles
  let className = props.primary ? "primary" : " ";
  return (
    <div>
      {/* to add more styles to one element */}
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  );
}

export default Stylesheet;
