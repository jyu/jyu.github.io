import React, { useState } from "react";
import { range } from "lodash";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import restaurants from "../../data/restaurants";

const requestImageFile = require.context(
  "../../media/restaurants",
  true,
  /.jpg$/
);

function Restaurant(props) {
  const { classes, name } = props;
  const isMobile = window.innerWidth <= 800;
  const data = restaurants[name];
  return (
    <div className={classes.component}>
      <div className={!isMobile ? classes.container : classes.containerMobile}>
        <h1 className={classes.h1}>{data.name}</h1>
        <div className={classes.images}>
          {range(data.images).map((i) => (
            <div className={!isMobile ? classes.imgBox : classes.imgBoxMobile}>
              <img
                key={i}
                src={requestImageFile(`./${name}/${i}.jpg`).default}
                alt={name + String(i)}
                className={!isMobile ? classes.img : classes.imgMobile}
                alt="content"
              />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Restaurant);
