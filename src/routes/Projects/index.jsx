import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { isMobile } from "react-device-detect";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import caltra from "../../media/projects/caltra.png";
import cards from "../../media/projects/cards.png";
import cookiebot from "../../media/projects/cookiebot.png";
import fudmaps from "../../media/projects/fudmaps.png";
import localization from "../../media/projects/localization.png";
import nlp from "../../media/projects/nlp.png";
import portrait from "../../media/projects/portrait.png";
import spotrecs from "../../media/projects/spotrecs.png";
import tldw from "../../media/projects/tldw.png";

function Projects(props) {
  const { classes } = props;

  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div>
      <NavBar />
      <div className={classes.component}>
        <div
          className={!isMobile ? classes.container : classes.containerMobile}
        >
          <h1 className={classes.h1}>Projects</h1>
          <div className={classes.projects}>
            <a
              className={`${classes.project} text-link`}
              href="https://www.youtube.com/watch?v=AF8zmTaa17s"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes.projectImage}
                src={cookiebot}
                alt="cookiebot"
              />
              <div className={classes.projectName}>Cookiebot</div>
              <div className={classes.flow}>
                ML based gesture controlled home robot
              </div>
              <div className={classes.flow}>Spring 2020</div>
            </a>
            <a
              className={`${classes.project} text-link`}
              href="https://github.com/jyu/food-videos/blob/master/report/final.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes.projectImage}
                src={localization}
                alt="localization"
              />
              <div className={classes.projectName}>Food Video Localization</div>
              <div className={classes.flow}>
                Multimedia ML pipeline to find featured restaurants
              </div>
              <div className={classes.flow}>Spring 2020</div>
            </a>
            <a
              className={`${classes.project} text-link`}
              href={
                process.env.PUBLIC_URL + "/multi_card_recognition_report.pdf"
              }
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.projectImage} src={cards} alt="cards" />
              <div className={classes.projectName}>Multi Card Recognition</div>
              <div className={classes.flow}>
                Using autogenerated data, autoencoders, CNNs
              </div>
              <div className={classes.flow}>Fall 2019</div>
            </a>
            <a
              className={`${classes.project} text-link`}
              href="https://gocaltra.herokuapp.com/dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.projectImage} src={caltra} alt="caltra" />
              <div className={classes.projectName}>Caltra</div>
              <div className={classes.flow}>
                Helping over 3,500 people reach their goals
              </div>
              <div className={classes.flow}>Summer 2019</div>
            </a>
            <a
              className={`${classes.project} text-link`}
              href="https://www.youtube.com/watch?v=vTzlnn-V-yc"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.projectImage} src={nlp} alt="nlpqa" />
              <div className={classes.projectName}>Wikipedia QA System</div>
              <div className={classes.flow}>
                Given an article, generating and answering questions
              </div>
              <div className={classes.flow}>Fall 2018</div>
            </a>
            <a
              className={`${classes.project} text-link`}
              href="https://github.com/hsubbaraj/tldw"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.projectImage} src={tldw} alt="tldw" />
              <div className={classes.projectName}>Too Long Didn't Watch</div>
              <div className={classes.flow}>
                Summarizing videos into gifs, HackMIT Giphy award
              </div>
              <div className={classes.flow}>Fall 2018</div>
            </a>
            <a
              className={`${classes.project} text-link`}
              href="https://github.com/jyu/foodmaps"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes.projectImage}
                src={fudmaps}
                alt="fudmaps"
              />
              <div className={classes.projectName}>Fudmaps</div>
              <div className={classes.flow}>Video based Yelp</div>
              <div className={classes.flow}>Summer 2018</div>
            </a>
            <a
              className={`${classes.project} text-link`}
              href={process.env.PUBLIC_URL + "/portrait_poster.pdf"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes.projectImage}
                src={portrait}
                alt="portrait"
              />
              <div className={classes.projectName}>Parallel Portrait Mode</div>
              <div className={classes.flow}>180x speedup using CUDA</div>
              <div className={classes.flow}>Spring 2018</div>
            </a>
            <a
              className={`${classes.project} text-link`}
              href="https://github.com/jyu/spotrecs/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={classes.projectImage}
                src={spotrecs}
                alt="spotrecs"
              />
              <div className={classes.projectName}>SpotRecs</div>
              <div className={classes.flow}>Spotify playlist visualizer</div>
              <div className={classes.flow}>Summer 2017</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Projects);
