import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //destructuring props in class components is done in the render method
    //const {name, anotherName} = this.props
    //you can also destructure states in the same way
    //const {state1, state2} = this.state
    return (
      <h1>
        {/*in here we can remove this.props*/}
        Is Gogias {this.props.name} also {this.props.anotherName}
      </h1>
    );
  }
}

export default Welcome;
