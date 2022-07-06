import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
//Let's track Mounting Lifecycle execution
class LifecycleA extends Component {
  //1st method: constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Rose",
    };
    console.log("LifecycleA constructor");
  }

  //2nd method: static getDeriveStateFromProps
  static getDeriveStateFromProps(props, state) {
    console.log("LifeCycleA getDeriveStateFromProps");
    return null;
  }

  //4th method:componentDidMount
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  //3rd method: render
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
