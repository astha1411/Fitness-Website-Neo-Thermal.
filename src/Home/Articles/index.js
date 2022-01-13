import React from "react";
import "./style.css";
import icon from "../../asset/pushup.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="cont">
          <a className="link" href={this.props.link} target="_blank">
            <img src={icon}></img>
            <p className="text">{this.props.title}</p>
          </a>
        </div>
      </div>
    );
  }
}
export default Home;
