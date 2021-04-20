import React, { useState, useEffect } from "react";
import { shuffle, zip } from "lodash";
import { isMobile } from "react-device-detect";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import Aus from "../../media/bgs/aus.jpg";
import Boats from "../../media/bgs/boats.jpg";
import Singapore from "../../media/bgs/singapore.jpg";
import CentralPark from "../../media/bgs/centralpark.jpg";
import Port from "../../media/bgs/port.jpg";
import Gardens from "../../media/bgs/gardens.jpg";
import Bangkok from "../../media/bgs/bangkok.jpg";
import Tokyo from "../../media/bgs/tokyo.jpg";
import Ameya from "../../media/bgs/ameya.jpg";
import Dolores from "../../media/bgs/dolores.jpg";
import Palace from "../../media/bgs/palace.jpg";

const bgs = [
  Aus,
  Boats,
  Singapore,
  Port,
  CentralPark,
  Gardens,
  Bangkok,
  Tokyo,
  Ameya,
  Dolores,
  Palace,
];
const descriptions = [
  "Coogee to Bondi Walk, Sydney",
  "Damnoen Saduak Floating Market, Bangkok",
  "Merlion Park, Singapore",
  "Praça do Comércio, Lisbon",
  "Central Park, New York City",
  "Gardens by the Bay, Singapore",
  "Ratchathewi, Bangkok",
  "Sake Barrels at Meiji Jingu, Tokyo",
  "Restaurant in Ameya Yokocho Market, Tokyo",
  "Mission Dolores Park, San Francisco",
  "Palace of Fine Arts, San Francisco",
];

const zipBg = shuffle(zip(bgs, descriptions));

function Home(props) {
  const { classes } = props;
  const numBgs = bgs.length;
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState();

  const startTimer = () => {
    if (timer) {
      clearInterval(timer);
    }
    const interval = setInterval(() => {
      setIndex((index) => {
        return index === numBgs - 1 ? 0 : index + 1;
      });
    }, 10000);
    setTimer(interval);
    return interval;
  };

  const backFn = () => {
    startTimer();
    if (index === 0) {
      setIndex(numBgs - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const forwardFn = () => {
    startTimer();
    if (index === numBgs - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={classes.component}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${zipBg[index][0]})`,
      }}
    >
      <div className={!isMobile ? classes.container : classes.containerMobile}>
        <div className={classes.intro}>
          <h1 className={classes.h1}>Jerry Yu</h1>
          <p className={classes.p}>Software Engineer at Instagram</p>
          <p className={classes.p}>
            I like{" "}
            <a className={classes.a} href="/food">
              eating
            </a>{" "}
            and{" "}
            <a className={classes.a} href="/projects">
              building stuff
            </a>
            .
          </p>

          <a
            className={classes.a}
            href={process.env.PUBLIC_URL + "/resume.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
        <div className={classes.image}>
          <p className={classes.p}>Image: {zipBg[index][1]}</p>
          <div className={classes.controls}>
            <KeyboardArrowLeftIcon
              onClick={backFn}
              className={classes.button}
            />
            <span>
              {index + 1} {"/"} {numBgs}
            </span>
            <KeyboardArrowRightIcon
              onClick={forwardFn}
              className={classes.button}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
