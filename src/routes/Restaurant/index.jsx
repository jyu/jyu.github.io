import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import Cake from "../../media/cake.jpg";

function Restaurant(props) {
  const { classes, name } = props;
  const isMobile = window.innerWidth <= 800;
  return (
    <div className={classes.component}>
      <div className={!isMobile ? classes.container : classes.containerMobile}>
        <h1 className={classes.h1}>{name}</h1>
        <img
          src={Cake}
          className={!isMobile ? classes.img : classes.imgMobile}
          alt="content"
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(Restaurant);
