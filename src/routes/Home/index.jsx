import React, { useState, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Aus from "../../media/aus.jpg";

function Home(props) {
  const { classes } = props;
  const isMobile = window.innerWidth <= 800;

  return (
    <div
      className={classes.component}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Aus})`,
      }}
    >
      <div className={!isMobile ? classes.container : classes.containerMobile}>
        <h1 className={classes.h1}>Jerry Yu</h1>
        <p className={classes.p}>Software Engineer at Instagram</p>
        <a className={classes.a} href={process.env.PUBLIC_URL + "/resume.pdf"}>
          Resume
        </a>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
