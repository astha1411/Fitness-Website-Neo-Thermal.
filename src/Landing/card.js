import React, { Component } from "react";
import "./styles.css";
import { Card, Row } from "react-bootstrap";

class Box extends Component {
  render() {
    return (
      <Card className="transbox">
        <img className="image" src={this.props.image} />
        <div className="quote">{this.props.quote}</div>

        <div className="start">
          <p>Let's do {this.props.exercise}</p>
        </div>
      </Card>
    );
  }
}
export default Box;
