import React, { useState } from "react";
import { range } from "lodash";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import restaurants from "../../data/restaurants";
import NavBar from "../../components/NavBar";

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
      <NavBar />
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
