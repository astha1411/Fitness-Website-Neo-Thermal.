import React, { Component } from "react";
import "./styles.css";
import { Row } from "react-bootstrap";
import Card from "./card.js";
import plankvideo from "../asset/plank.mp4";
import pushupvideo from "../asset/plank.mp4";
import squatsvideo from "../asset/plank.mp4";
import Home from "../Home";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
// import Links from "../App.js";

class FirstPage extends Component {
  render() {
    return (
      <div className="background">
        <div className="head">
          <h1>Neo-Thermal AI Innovations LLP</h1>
        </div>

        <Row className="row">
          <Link to="/plank">
            <Card
              image="https://www.internationalfitnessacademy.com/wp-content/uploads/2017/05/d064fd5643cdf4a738bd4bf0d036267c79d2c517.jpg"
              quote="If you think time flies, you haven't held a plank recently."
              exercise="PLANK"
            />
          </Link>
          <Link to="/crunches">
            <Card
              image="https://www.thelist.com/img/gallery/when-do-you-crunches-every-day-this-is-what-happens-to-your-body/doing-crunches-every-day-can-improve-your-balance-and-help-you-exercise-better-1608744511.jpg"
              quote="Crunch, curl, coffee, repeat"
              exercise="CRUNCHES"
            />
          </Link>
          <Link to="/pushup">
            <Card
              image="https://qph.fs.quoracdn.net/main-qimg-82b6abb9f8e8bf064fae9d8ec7d75509"
              quote="If you fall, you rise back up and push harder."
              exercise="PUSHUP"
            />
          </Link>
          <Link to="/burpees">
            <Card
              image="https://images.medicinenet.com/images/article/main_image/does-burpees-burn-belly-fat.jpg"
              quote="Keep Calm and Love Burpees"
              exercise="BURPEES"
            />
          </Link>
          <Link to="/squats">
            <Card
              image="https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/10/front-squat_1.jpg"
              quote="Keep your squats low and your standards high"
              exercise="SQUATS"
            />
          </Link>
        </Row>
      </div>
    );
  }
}
export default FirstPage;
