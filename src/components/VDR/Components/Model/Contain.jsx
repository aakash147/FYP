import React, { Component } from "react";
import Body from "./Contain/Body";
import Model from "./Contain/Model";
import Bikini from "./Contain/Bikini";
import Feet from "./Contain/Feet";

const containClass = {
  width: "460px",
  height: "590px",
  margin: "0 auto",
  background: 'url("./images/background/background_998.jpg")',
  position: "relative",
};
const styles = {
  containClass,
};

export default class Contain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topclothes: null,
      botclothes: null,
      shoes: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      [nextProps.selectedItem.type]: nextProps.selectedItem,
    });
  }
  render() {
    if (this.state.background) {
      if (this.state.background.default === true) {
        styles.containClass = containClass;
      } else {
        styles.containClass = {
          ...styles.containClass,
          background: `url(${this.state.background.imgSrc_png})`,
          default: false,
        };
      }
    }
    return (
      <div style={styles.containClass}>
        <Body />
        <Model />
        <Bikini type="top" selectedItem={this.state.topclothes} />
        <Bikini type="bottom" selectedItem={this.state.botclothes} />
        <Feet type="left" selectedItem={this.state.shoes} />
        <Feet type="right" selectedItem={this.state.shoes} />
      </div>
    );
  }
}
