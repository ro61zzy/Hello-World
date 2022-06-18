import React from "react";

/*function Greet() {
  return <h1>Hello Rose</h1>;
}*/

//destructuring props
const Greet = ({ name, anotherName }) => {
  //const Greet = (props) => {
  return (
    <div>
      <h1>
        {/*Hello {props.name} also {props.anotherName}---with destructuring we can just use name and anotherName in the JSX*/}
        Hello {name} also {anotherName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

//Another way od destructuring properties in functional components is inside the function
{
  /*const Greet = prop => {
  const {name, anotherName} = props
  return (
    <div>
      <h1>Hello {name} also {anotherName}</h1>
    </div>
  )
}*/
}
