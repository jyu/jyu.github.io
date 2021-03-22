import React, { useState } from "react";
import { Link } from "react-router-dom";

import { range } from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import restaurants from "../../data/restaurants";

const requestImageFile = require.context(
  "../../media/restaurants",
  true,
  /.jpg$/
);

const prices = [
  "$ (1-10)",
  "$$ (10-30)",
  "$$$ (30-50)",
  "$$$$ (50-100)",
  "$$$$$ (100+)",
];
function Restaurant(props) {
  const { classes, name } = props;
  const isMobile = window.innerWidth <= 800;
  const data = restaurants[name];

  const images = (
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
  );
  const imagesTwo = (
    <div className={classes.images}>
      {range(data.images).map(
        (i) =>
          i < 2 && (
            <div className={!isMobile ? classes.imgBox : classes.imgBoxMobile}>
              <img
                key={i}
                src={requestImageFile(`./${name}/${i}.jpg`).default}
                alt={name + String(i)}
                className={!isMobile ? classes.img : classes.imgMobile}
                alt="content"
              />
            </div>
          )
      )}
    </div>
  );

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar} variant="dense">
        <Link to="/" class="text-link">
          <div className={classes.leftSegment}>Home</div>
          </Link>
          <div className={classes.leftAppbar}>
          <Link to="/food" class="text-link">
            <div className={classes.segment}>Food</div>
            </Link>
            <Link to="/food" class="text-link">
            <div className={classes.segment}>Projects</div>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.component}>
        <div
          className={!isMobile ? classes.container : classes.containerMobile}
        >
          <div
            className={
              !isMobile ? classes.containerText : classes.containerTextMobile
            }
          >
            <h1 className={classes.h1}>{data.name}</h1>
            <div className={classes.headers}>
              <div className={classes.header}>Location: {data.location}</div>
              <div className={classes.header}>Rating: {data.rating}/10</div>
              <div className={classes.header}>Price: {prices[data.price]}</div>
              <div className={classes.header}>
                Last Visited: {data.lastVisited}
              </div>
              {data.michelin && (
                <div className={classes.header}>Michelin {data.michelin}</div>
              )}
            </div>
          </div>
          {!isMobile && imagesTwo}
          <div
            className={
              !isMobile ? classes.containerText : classes.containerTextMobile
            }
          >
            {data.text.map((t) => (
              <p className={classes.p}>{t}</p>
            ))}
          </div>
          {images}

          <div
            className={
              !isMobile ? classes.containerText : classes.containerTextMobile
            }
          >
            <p className={classes.p}>Dishes tasted:</p>
            <ul>
              {data.dishes.map((d) => (
                <li className={classes.li}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Restaurant);
