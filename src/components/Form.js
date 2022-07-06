import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    //you can deconstruct by
    //const {username, comments, topic} = this.state
    //then remove this.state form values
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <labe>Topic</labe>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="javascript">Javascript</option>
            <option value="html">HTML</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
