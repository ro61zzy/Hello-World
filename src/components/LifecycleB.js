import React, { Component } from "react";
//Let's track Mounting Lifecycle execution
class LifecycleB extends Component {
  //1st method: constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Rose",
    };
    console.log("LifecycleB constructor");
  }

  //2nd method: static getDeriveStateFromProps
  static getDeriveStateFromProps(props, state) {
    console.log("LifeCycleB getDeriveStateFromProps");
    return null;
  }

  //4th method:componentDidMount
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  //3rd method: render
  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
