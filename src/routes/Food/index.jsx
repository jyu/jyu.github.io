import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { map, orderBy, sortBy, reverse, keys, groupBy } from "lodash";

import {
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import styles from "./styles";
import NavBar from "../../components/NavBar";

import restaurants from "../../data/food";

const requestImageFile = require.context("../../media/food", true, /.jpeg$/);

const dispPrices = ["$", "$$", "$$$", "$$$$", "$$$$$"];

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#c2c2c2",
      dark: "#c2c2c2",
    },
    secondary: {
      main: "#c2c2c2",
      dark: "#c2c2c2",
    },
  },
});

function Food(props) {
  const { classes } = props;
  useEffect(() => {
    document.title = "Food";
  }, []);

  const restaurantWithKey = keys(restaurants).map((key) => {
    return {
      key,
      ...restaurants[key],
    };
  });
  console.log(restaurantWithKey);
  const sortedRestaurants = orderBy(restaurantWithKey, ["times", "rating"], ["desc", "desc"]);
  console.log(sortedRestaurants);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <div className={classes.component}>
          <div
            className={!isMobile ? classes.container : classes.containerMobile}
          >
            <div className={!isMobile ? classes.header : classes.headerMobile}>
              <h1 className={classes.h1}>Restaurants</h1>
              <div className={classes.p}></div>
              <div className={classes.foods}>
                {map(sortedRestaurants, (data) => {
                  return (
                    <div className={classes.card}>
                      <a
                        className={classes.link}
                        href={data.googleMaps}
                        target="_blank"
                      >
                        <img
                          key={props.i}
                          src={requestImageFile(`./${data.key}.jpeg`).default}
                          className={classes.img}
                          alt={data.key}
                        />
                        <p className={classes.p}>
                          {data.name} ({data.rating})
                        </p>
                      </a>
                      <p className={classes.p}>{data.text}</p>
                      <p className={classes.p}>
                        {data.location}{" "}
                        {data.district ? " - " + data.district : ""}
                      </p>
                      <p className={classes.p}>
                        {data.style} {dispPrices[data.price]}
                      </p>
                      <p className={classes.p}>
                        Visited {data.times}
                        {data.times >= 4 ? "+" : ""}{" "}
                        {data.times == "1" ? "time" : "times"}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Food);
