import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { map, orderBy, sortBy, reverse, keys, groupBy, values } from "lodash";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import {
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

import styles from "./styles";
import NavBar from "../../components/NavBar";

import restaurants from "../../data/food";

const requestImageFile = require.context("../../media/food", true, /.jpeg$/);

const dispPrices = ["$", "$$", "$$$", "$$$$", "$$$$$"];
const pricesToNum = {
  $: "$1-$15",
  $$: "$15-$30",
  $$$: "$31-$60",
  $$$$: "$61-$100",
  $$$$$: "$101+",
};
const ratingToDisp = {
  0: "0: Would not recommend",
  1: "1: Would not recommend",
  2: "2: Would not recommend",
  3: "3: Would not recommend",
  4: "4",
  5: "5: Would recommend if you're into it",
  6: "6: Would recommend trying once",
  7: "7: Would recommend",
  8: "8: Strongly recommend",
  9: "9",
  10: "10",
};
const rankingToOrder = {
  price: "asc",
  rating: "desc",
  times: "desc",
};
const dispOrder = {
  asc: "ascending",
  desc: "descending",
};

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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Food(props) {
  const { classes } = props;
  useEffect(() => {
    document.title = "Food";
  }, []);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { height, width } = windowDimensions;
  console.log(height, width);
  const restaurant_with_key = keys(restaurants).map((key) => {
    return {
      key,
      ...restaurants[key],
    };
  });

  // Filter logic start ----------
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const toggleFilter = (name, type) => {
    const isOn =
      filters.filter((f) => f["name"] === name && f["type"] === type).length >
      0;
    if (!isOn) {
      setFilters((arr) => [...arr, { name: name, type: type }]);
    } else {
      setFilters((arr) =>
        arr.filter((f) => !(f["name"] === name && f["type"] === type))
      );
    }
  };

  const restaurant_list = values(restaurant_with_key);
  const locations = groupBy(restaurant_list, "location");
  const styles = groupBy(restaurant_list, "style");
  const prices = groupBy(restaurant_list, "price");
  const ratings = groupBy(restaurant_list, "rating");
  const times = groupBy(restaurant_list, "times");

  const filtered_restaurants = restaurant_list.filter((r) => {
    // No filters
    if (filters.length === 0) {
      return true;
    }
    const filters_by_type = groupBy(filters, "type");
    const filter_types = Object.keys(filters_by_type);
    // Apply filters
    // Across filter types (location, rating) is AND filter
    for (let i = 0; i < filter_types.length; i++) {
      const filter_type = filter_types[i];
      // Within a type is OR filter
      let pass = false;
      for (let j = 0; j < filters_by_type[filter_type].length; j++) {
        const filter = filters_by_type[filter_type][j];
        if (r[filter.type] === filter.name) {
          pass = true;
        }
      }
      if (!pass) {
        return false;
      }
    }

    return true;
  });
  const filtered_locations = groupBy(filtered_restaurants, "location");
  const filtered_styles = groupBy(filtered_restaurants, "style");
  const filtered_prices = groupBy(filtered_restaurants, "price");
  const filtered_ratings = groupBy(filtered_restaurants, "rating");
  const filtered_times = groupBy(filtered_restaurants, "times");

  const filterGroup = (
    arr,
    filtered_arr,
    filters,
    filterType,
    filterName,
    sortFn,
    valueGetter
  ) => (
    <div className={!isMobile ? classes.filter : classes.filterMobile}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.formLabel}>
          {filterName}:
        </FormLabel>
        <FormGroup>
          {sortFn(arr).map((name) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    filters.filter(
                      (f) => f["name"] === name && f["type"] === filterType
                    ).length > 0
                  }
                  onChange={() => toggleFilter(name, filterType)}
                  name={name}
                  className={classes.checkbox}
                />
              }
              label={
                filters.length > 0
                  ? filtered_arr[name] && filtered_arr[name].length > 0
                    ? // Filter active and there is values
                      `${valueGetter ? valueGetter(name) : name} (${
                        filtered_arr[name].length
                      })`
                    : // Filter active and there are no values
                      `${valueGetter ? valueGetter(name) : name}`
                  : // No filter active
                    `${valueGetter ? valueGetter(name) : name} (${
                      arr[name].length
                    })`
              }
              classes={{
                label: classes.filterLabel,
              }}
              className={classes.filterControLabel}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
  // Filter logic end ----------

  // Rank logic start ----------
  const [rankOpen, setRankOpen] = useState(false);
  const [rank, setRank] = useState("times");
  const [order, setOrder] = useState(rankingToOrder[rank]);

  const orderFn = (restaurants) => {
    const restaurants_with_num_fields = restaurants.map((r) => {
      return {
        ...r,
        rating: Number(r.rating),
        times: Number(r.times),
      };
    });
    return orderBy(
      restaurants_with_num_fields,
      [rank, "rating"],
      [order, "desc"]
    );
  };
  // Ranking logic end ----------

  // Group logic start ----------
  const [groupOpen, setGroupOpen] = useState(false);
  const [groupByVal, setGroupByVal] = useState("location");

  // Group By
  const restaurant_group_by = groupBy(
    reverse(filtered_restaurants),
    groupByVal
  );
  const group_by_keys = keys(restaurant_group_by);
  const sorted_group_by_frequency = sortBy(group_by_keys, (key) =>
    groupByVal === "location" || groupByVal === "style"
      ? -1 * restaurant_group_by[key].length
      : groupByVal === "rating" || groupByVal === "times"
      ? -1 * Number(key)
      : Number(key)
  );
  // Group logic end ----------

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <div className={classes.component}>
          <div
            className={
              !isMobile
                ? width > 1400
                  ? classes.containerLarge
                  : classes.container
                : classes.containerMobile
            }
          >
            <div className={!isMobile ? classes.header : classes.headerMobile}>
              <div className={classes.headerupdate}>
                <h1 className={classes.h1}>Restaurants</h1>
                {!isMobile && (
                  <div className={classes.update}>
                    Last updated: 11/11/2021 (NYC, Pittsburgh, Bay Area, SEA)
                  </div>
                )}
              </div>
              <div className={classes.controls}>
                <div
                  className={classes.buttonText}
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <span>Filter By</span>{" "}
                  {filterOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
                {filterOpen && (
                  <div className={classes.filters}>
                    {filterGroup(
                      styles,
                      filtered_styles,
                      filters,
                      "style",
                      "Styles",
                      (arr) => reverse(sortBy(keys(arr), (n) => arr[n].length))
                    )}
                    {filterGroup(
                      locations,
                      filtered_locations,
                      filters,
                      "location",
                      "Locations",
                      (arr) => reverse(sortBy(keys(arr), (n) => arr[n].length))
                    )}
                    {filterGroup(
                      prices,
                      filtered_prices,
                      filters,
                      "price",
                      "Prices",
                      (arr) => keys(arr).sort(),
                      (p) => dispPrices[p]
                    )}
                    {filterGroup(
                      ratings,
                      filtered_ratings,
                      filters,
                      "rating",
                      "Ratings",
                      (arr) => sortBy(keys(arr), (r) => -1 * Number(r))
                    )}
                    {filterGroup(
                      times,
                      filtered_times,
                      filters,
                      "times",
                      "Times",
                      (arr) => sortBy(keys(arr), (r) => -1 * Number(r)),
                      (t) => (t >= 4 ? `${t}+` : t)
                    )}
                  </div>
                )}
                <div
                  className={classes.buttonText}
                  onClick={() => setGroupOpen(!groupOpen)}
                >
                  <span>Group By</span>{" "}
                  {groupOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
                {groupOpen && (
                  <div className={classes.groupControls}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        {["style", "location", "price", "rating", "times"].map(
                          (name) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={groupByVal === name}
                                  onChange={() => setGroupByVal(name)}
                                  name={name}
                                  className={classes.checkbox}
                                />
                              }
                              label={name}
                              classes={{
                                label: classes.filterLabel,
                              }}
                              className={classes.filterControLabel}
                              key={name}
                            />
                          )
                        )}
                      </FormGroup>
                    </FormControl>
                  </div>
                )}
                <div
                  className={classes.buttonText}
                  onClick={() => setRankOpen(!rankOpen)}
                >
                  <span>Rank By</span>{" "}
                  {rankOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
                {rankOpen && (
                  <div className={classes.groupControls}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        {["price", "rating", "times"].map((name) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={rank === name}
                                onChange={() => setRank(name)}
                                name={name}
                                className={classes.checkbox}
                              />
                            }
                            label={name}
                            classes={{
                              label: classes.filterLabel,
                            }}
                            className={classes.filterControLabel}
                            key={name}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        {["asc", "desc"].map((name) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={order === name}
                                onChange={() => setOrder(name)}
                                name={name}
                                className={classes.checkbox}
                              />
                            }
                            label={dispOrder[name]}
                            classes={{
                              label: classes.filterLabel,
                            }}
                            className={classes.filterControLabel}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </div>
                )}
              </div>
              <div className={classes.p}></div>
              {map(sorted_group_by_frequency, (groupByKey) => {
                return (
                  <div key={groupByKey}>
                    <h2 className={classes.h2}>
                      {groupByVal === "price"
                        ? pricesToNum[dispPrices[groupByKey]]
                        : groupByVal === "rating"
                        ? ratingToDisp[groupByKey]
                        : groupByKey}
                    </h2>
                    <div
                      className={
                        !isMobile
                          ? classes.foodContainer
                          : classes.foodContainerMobile
                      }
                    >
                      {map(orderFn(restaurant_group_by[groupByKey]), (data) => {
                        return (
                          <div
                            className={
                              !isMobile ? classes.card : classes.cardMobile
                            }
                            key={data.name}
                          >
                            <a
                              className={classes.link}
                              href={data.googleMaps}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={
                                  requestImageFile(`./${data.key}.jpeg`).default
                                }
                                className={
                                  !isMobile ? classes.img : classes.imgMobile
                                }
                                alt={data.key}
                              />
                              <p className={classes.name}>
                                {data.name}{" "}
                                <Tippy
                                  content={ratingToDisp[data.rating]}
                                  theme="material"
                                >
                                  <span>({data.rating})</span>
                                </Tippy>
                                {data.michelin}
                              </p>
                            </a>
                            <p className={classes.p}>{data.text}</p>
                            <p className={classes.p}>
                              {data.location}{" "}
                              {data.district ? " - " + data.district : ""}
                            </p>
                            <p className={classes.p}>
                              {data.style}{" "}
                              <Tippy
                                content={pricesToNum[dispPrices[data.price]]}
                                theme="material"
                              >
                                <span>{dispPrices[data.price]}</span>
                              </Tippy>
                            </p>
                            <p className={classes.p}>
                              Visited {data.times}
                              {data.times >= 4 ? "+" : ""}{" "}
                              {data.times === 1 ? "time" : "times"}
                            </p>
                            {data.video && (
                              <a
                                className={classes.videoLink}
                                href={data.video}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                Video{" "}
                              </a>
                            )}
                            {data.closed && (
                              <p className={classes.p}>Permanently Closed</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Food);
