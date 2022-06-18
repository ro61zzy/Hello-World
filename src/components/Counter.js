import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        //this is where you place code-as a second parameter--call back--because code cannot be excecuted after setState
        console.log("Callback value", this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
