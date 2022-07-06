import React from "react";
import Person from "./Person";

function NameList() {
  //let's use index as keys
  const names = ["Rose", "Lucy", "Amanda", "Nancy"];
  //to render a bigger list,,you can have this in different components
  //   const persons = [
  //     {
  //       id: 1,
  //       name: "Bob",
  //       age: 15,
  //       skill: "Football",
  //     },
  //     {
  //       id: 2,
  //       name: "Jayden",
  //       age: 11,
  //       skill: "Gaming",
  //     },
  //     {
  //       id: 3,
  //       name: "Sherro",
  //       age: 8,
  //       skill: "Flying",
  //     },
  //   ];
  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
{
  /* //   const names = ["Rose", "Lucy", "Amanda"];
//   const nameList = names.map((name) => <h2>{name}</h2>);
//   return <div>{nameList}</div>; */
}
{
  /* another way, but to keep return statement clean,use that, up
       {names.map((name) => (
        <h2>{name}</h2>
      ))} */
}
{
  /* one way to display, simple but not good
      <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */
}
