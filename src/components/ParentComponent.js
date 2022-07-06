import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    //using eventbinding number 3
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    //alert('Hiya' + this.state.parentName)let's ude template literals, this is still okay tho
    alert(`Hiya ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
