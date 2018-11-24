import React, { Component } from "react";
import fetchGiph from "./gifSearchUtil";

const doorImgUrl =
  "https://uploads.codesandbox.io/uploads/user/6a519f90-f347-4996-9834-926d26f2b92a/YFBD-Screenshot%202018-11-20%20at%2022.12.08.png";

class Door extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      gifUrl: "",
      keyword: "santa claus"
    };
  }

  async componentDidMount() {
    const { day } = this.props;
    const { keyword } = this.state;
    const gifUrl = await fetchGiph(keyword);
    this.setState({ gifUrl });
  }

  open() {
    this.setState({ opened: true });
  }

  close() {
    this.setState({ opened: false });
  }

  renderDoor() {
    const { opened, gifUrl } = this.state;

    if (opened)
      return (
        <div className="door-opened" onClick={this.close.bind(this)}>
          <img src={this.state.gifUrl} alt="door open" />
        </div>
      );
    else
      return (
        <div className="door-closed" onClick={this.open.bind(this)}>
          <img src={doorImgUrl} alt="door closed" />
        </div>
      );
  }

  render() {
    return (
      <div className="door">
        <div className="day">{this.props.day}</div>
        {this.renderDoor()}
      </div>
    );
  }
}

export default Door;
