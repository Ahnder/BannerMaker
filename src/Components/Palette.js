import React, { Component } from "react";
import { CirclePicker, HuePicker } from "react-color";

class Palette extends Component {
  render() {
    return (
      <>
        <div className="paletteWrapper">
          <div className="circlePicker">
            <CirclePicker
              color={this.props.color}
              onChange={this.props.onChange}
            />
          </div>
          <div className="huePicker">
            <HuePicker
              color={this.props.color}
              onChange={this.props.onChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Palette;
