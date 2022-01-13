import React, { Component } from "react";
import "./style.css";
class Scale extends Component {
  render() {
    const score = 8 * this.props.score;
    const title = this.props.title;

    let percent = score + "px";

    return (
      <div className="main">
        <p className="title">{title}</p>

        <div className="box" style={{ width: percent }}></div>

        <div className="hr"></div>

        <div className="sc">
          <div className="units-line">preworkout</div>
        </div>

        <div className="sc">
          <div className="units-line">warm-up</div>
        </div>

        <div className="sc">
          <div className="units-line">light-workout</div>
        </div>

        <div className="sc">
          <div className="units-line">heavy-workout</div>
        </div>
        <div className="sc">
          <div className="units-line"></div>
        </div>
      </div>
    );
  }
}
export default Scale;
