import React, { useState, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function Home(props) {
  const { classes } = props;
  const isMobile = window.innerWidth <= 800;

  return (
    <div className={!isMobile ? classes.component : classes.componentMobile}>
      <h1 className={classes.h1}>Jerry Yu</h1>
      <p className={classes.p}>Software Engineer at Instagram</p>
      <a href={process.env.PUBLIC_URL + "/resume.pdf"}>Resume</a>
    </div>
  );
}

export default withStyles(styles)(Home);
