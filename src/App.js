import React, { Component } from "react";
import "./App.css";

import Palette from "./Components/Palette";
import TextInput from "./Components/TextInput";
import Preview from "./Components/Preview";

class App extends Component {
  state = {
    color: "#ccc",
    text: "Sample Text",
    href: "",
  };

  componentDidMount() {
    this.setState({
      color: this.getRandomBackgroundColor(),
    });
  }

  getRandomBackgroundColor = () => {
    return "#" + `0${(~~(Math.random() * 16777215)).toString(16)}`.slice(-6);
  };

  handleChange = (color) => {
    this.setState({
      color: color.hex,
    });
  };
  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { color, text, href } = this.state;

    return (
      <div className="App">
        <span>Banner Maker</span>
        <Preview color={color} text={text} href={href} />
        <TextInput onChange={this.handleTextChange} />
        <Palette color={color} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
