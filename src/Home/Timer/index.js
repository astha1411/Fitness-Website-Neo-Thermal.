import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
import { useState } from "react";
import { FaRedoAlt } from "react-icons/fa";

import Modal from "./Modal";

const minuteSeconds = 60;
const hourSeconds = 3600;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

export default function App(props) {
  const [key, setKey] = useState(0);
  const time = props.time;

  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = startTime + time; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const minutesDuration = Math.ceil(remainingTime / minuteSeconds);
  const Duration = minutesDuration * 60;

  return (
    <div>
      <div className="App">
        <CountdownCircleTimer
          {...timerProps}
          key={key + 100}
          colors={[["#EF798A"]]}
          duration={Duration}
          initialRemainingTime={remainingTime}
          onComplete={() => {
            return [true, 1500]; // repeat animation in 1.5 seconds
          }}
        >
          {({ elapsedTime }) =>
            renderTime("minutes", getTimeMinutes(Duration - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          key={key + 1}
          colors={[["#218380"]]}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("seconds", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
      <div id="small-block">
        <Modal />
        {/* <div className="btn">
          <button id="button">INSTRUCTIONS</button>
        </div> */}

        <div className="icon">
          <FaRedoAlt onClick={() => setKey((prevKey) => prevKey + 1)} />
        </div>
      </div>

      
    </div>
  );
}
