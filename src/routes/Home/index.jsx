import React, { useState } from "react";
import { shuffle, zip } from "lodash";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import Aus from "../../media/bgs/aus.jpg";
import Boats from "../../media/bgs/boats.jpg";
import SF from "../../media/bgs/sf.jpg";
import Singapore from "../../media/bgs/singapore.jpg";
import CentralPark from "../../media/bgs/centralpark.jpg";
import Port from "../../media/bgs/port.jpg";
import Gardens from "../../media/bgs/gardens.jpg";
import Bangkok from "../../media/bgs/bangkok.jpg";

const bgs = [Aus, Boats, Singapore, Port, CentralPark, SF, Gardens, Bangkok];
const descriptions = [
  "Coogee to Bondi Walk, Sydney",
  "Damnoen Saduak Floating Market, Bangkok",
  "Merlion Park, Singapore",
  "Praça do Comércio, Lisbon",
  "Central Park, New York City",
  "From the Golden Gate Bridge, San Francisco",
  "Gardens by the Bay, Singapore",
  "Ratchathewi, Bangkok",
];

const zipBg = shuffle(zip(bgs, descriptions));

function Home(props) {
  const { classes } = props;
  const isMobile = window.innerWidth <= 800;
  const numBgs = bgs.length;
  const [index, setIndex] = useState(0);

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
          <p className={classes.p}>
            {" "}
            {index !== 0 && (
              <a
                className={classes.p}
                href={"#"}
                onClick={() => setIndex(Math.max(0, index - 1))}
              >
                {"<"} Back
              </a>
            )}{" "}
            {index + 1} {"/"} {numBgs}{" "}
            {index !== numBgs - 1 && (
              <a
                className={classes.p}
                href={"#"}
                onClick={() => setIndex(Math.min(numBgs - 1, index + 1))}
              >
                Next {">"}
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
