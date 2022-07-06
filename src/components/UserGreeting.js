import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //SHORT CIRCUIT Approach
    return this.state.isLoggedIn && <div>Welcome You</div>;

    //The TERNARY APPROACH
    // return this.state.isLoggedIn ? (
    //   <div>Welcome You</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //ELEMENT VARIABLE Approach
    //message is the variable thst stores
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welome You</div>;
    // } else {
    //   message = <div> Welcome guest</div>;
    // }
    // return <div>{message}</div>;

    //this is the IF/ELSE Approach
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome You</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //     <div>
    //         <div>Welcome You</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
