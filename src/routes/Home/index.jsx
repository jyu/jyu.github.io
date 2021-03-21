import React, { useState, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import styles from "./styles";

function Home(props) {
  const { classes } = props;
  const isMobile = window.innerWidth <= 800;

  return (
    <div className={!isMobile ? classes.component : classes.componentMobile}>
      {!isMobile && (
        <Grid container spacing={24} className={classes.row}>
          <Grid item xs={5} className={classes.left}>
            <h1 className={classes.h1}>Jerry Yu</h1>
            <p className={classes.p}>
              Software Engineer at Instagram
            </p>
          </Grid>
          <Grid item xs={6}>
            {/* <img src={Landing} alt="Caltra" className={classes.image} /> */}
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default withStyles(styles)(Home);
