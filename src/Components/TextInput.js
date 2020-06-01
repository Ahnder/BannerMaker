import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <>
        <input
          className="textInput"
          type="text"
          onChange={this.props.onChange}
          size="40"
          placeholder="Type Text Here!!"
        />
      </>
    );
  }
}

export default TextInput;
