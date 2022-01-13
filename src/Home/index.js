import React from "react";
import styles from "./style.css";
import { Card } from "react-bootstrap";
import Scale from "./Scale";
import Timer from "./Timer";
import Graph from "./Graph";
import Articles from "./Articles";
import HorizontalScroller from "react-horizontal-scroll-container";
// import plankvideo from "../asset/plank.mp4";
// import pushupvideo from "../asset/plank.mp4";
// import squatsvideo from "../asset/plank.mp4";
import video from "../asset/plank.mp4";
// import { MDBIcon } from "mdb-react-ui-kit";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.videoTag = React.createRef();
  }
  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => (this.videoTag.current.srcObject = stream))
      .catch(console.log);
  }

  showModal() {
    this.setState({
      modalVisible: true,
    });
  }
  hideModal() {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    const vid = this.props.vid;
    // const vid = video;
    return (
      <div>
        <div id="block">
          <div>
            <video
              className={styles.videot}
              id={this.props.id}
              ref={this.videoTag}
              width="400"
              height="280"
              autoPlay
              title={this.props.title}
            ></video>
          </div>
          <div>
            <video
              className={styles.yvideot}
              width="400"
              height="300"
              // controls="controls"
              // controls
              // preload="auto"
              playsInline
              autoPlay="autoplay"
              loop
              muted
            >
              <source src={vid} type="video/mp4" />
            </video>
          </div>
          <div>
            <Timer time={900} />
          </div>
        </div>
        <div id="block">
          <div>
            <Card className={styles.card}>
              <Scale title="RIGHT BICEP" score={96} />

              <Scale title="RIGHT TRICEP" score={46} />

              <Scale title="LEFT BICEP" score={20} />

              <Scale title="LEFT TRICEP" score={70} />
            </Card>
          </div>
          <div>
            <Graph />
          </div>
        </div>
        <hr />

        <div id="block">
          <HorizontalScroller sensibility={300}>
            <Articles
              className="articles"
              title="Health Benefits of Push-ups"
              link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj61feP0__0AhWNGqYKHSnPBr0QFnoECDQQAQ&url=https%3A%2F%2Fwww.mindbodygreen.com%2F0-18811%2F5-reasons-to-do-pushups-everyday.html&usg=AOvVaw1PrsEqUvF-FmseBLJZig7u "
            />
            <Articles
              className="articles"
              title="Push-ups for Beginners"
              link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwis_66p0__0AhXRyYsBHSqxB68QtwJ6BAgOEAM&url=https%3A%2F%2Fwww.healthline.com%2Fhealth%2Fpush-ups-for-beginners&usg=AOvVaw0fl2HmozQkJJPBmvOEUTcj"
            />
            <Articles
              className="articles"
              title="Types of Pushups"
              link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwis_66p0__0AhXRyYsBHSqxB68QFnoECCIQAQ&url=https%3A%2F%2Fwww.outsideonline.com%2Fhealth%2Ftraining-performance%2Ftypes-of-pushups%2F&usg=AOvVaw1sV4WPfnNEEWfRsr73tgzQ"
            />
            <Articles
              className="articles"
              title="Right Way to do Pushups"
              link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjZjav10__0AhWoBKYKHSCcAUQQFnoECCUQAQ&url=https%3A%2F%2Fwww.menshealth.com%2Ffitness%2Fa19547594%2Fbest-way-to-do-a-pushup%2F&usg=AOvVaw3LAk8a4atrg2SF1wAShhPI"
            />
            <Articles
              className="articles"
              title="Ways to make Pushup more Productive"
              link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjkzqy_1P_0AhUyJaYKHWyHDMkQFnoECBYQAQ&url=https%3A%2F%2Fwww.mensjournal.com%2Fhealth-fitness%2Ffive-ways-make-your-pushup-more-productive%2F&usg=AOvVaw3jAigtV2KINalSc1rZBDyG"
            />
          </HorizontalScroller>
        </div>
      </div>
    );
  }
}
export default Home;
