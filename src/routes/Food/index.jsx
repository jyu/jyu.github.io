import React, { useState, useEffect } from "react";
import { values, sortBy, reverse, keys, groupBy } from "lodash";
import { isMobile } from "react-device-detect";

import {
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import styles from "./styles";
import { DataGrid } from "@material-ui/data-grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
// import Pagination from "@material-ui/lab/Pagination";
// import PaginationItem from "@material-ui/lab/PaginationItem";
import NavBar from "../../components/NavBar";

import restaurants from "../../data/restaurants";

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

// function CustomPagination(props) {
//   const { state, api } = props;

//   return (
//     <Pagination
//       color="primary"
//       variant="outlined"
//       shape="rounded"
//       page={state.pagination.page}
//       count={state.pagination.pageCount}
//       // @ts-expect-error
//       renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
//       onChange={(event, value) => api.current.setPage(value)}
//     />
//   );
// }

function Food(props) {
  const { classes } = props;
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

  useEffect(() => {
    document.title = "Food";
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 250, sortable: true },
    { field: "style", headerName: "Style", width: 150, sortable: true },
    {
      field: "rating",
      headerName: "Rating",
      width: 100,
    },
    {
      field: "location",
      headerName: "Location",
      sortable: true,
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      sortable: true,
      width: 100,
      valueGetter: (params) => dispPrices[params.row.price],
    },
    {
      field: "lastVisited",
      headerName: "Last Visit",
      width: 150,
      type: "date",
      valueGetter: (params) => {
        const d = new Date(params.row.lastVisited);
        d.setDate(d.getDate() + 1);
        return d;
      },
    },
  ];

  const restaurant_list = values(restaurants);
  const locations = groupBy(restaurant_list, "location");
  const styles = groupBy(restaurant_list, "style");
  const prices = groupBy(restaurant_list, "price");

  const filtered_restaurants = restaurant_list.filter((r) => {
    // No filters
    if (filters.length === 0) {
      return true;
    }
    // Apply filters
    for (let i = 0; i < filters.length; i++) {
      if (r[filters[i].type] === filters[i].name) {
        return true;
      }
    }
    return false;
  });
  const rows = reverse(sortBy(filtered_restaurants, (r) => r.lastVisited));

  const filterGroup = (arr, filterType, filterName, sortFn, valueGetter) => (
    <div className={classes.filter}>
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
              label={`${valueGetter ? valueGetter(name) : name} (${
                arr[name].length
              })`}
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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <div className={classes.component}>
          <div
            className={!isMobile ? classes.container : classes.containerMobile}
          >
            <div className={!isMobile ? classes.header : classes.headerMobile}>
              <h1 className={classes.h1}>Food</h1>
              <div className={classes.p}>
                Ramblings about food I've eaten. Start{" "}
                <a className={classes.a} href="/intro">
                  here
                </a>{" "}
                and then click into a row!
              </div>
              <div
                className={classes.buttonText}
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <span>Filters</span>{" "}
                {filterOpen ? <ExpandLess /> : <ExpandMore />}
              </div>
              {filterOpen && (
                <div className={classes.filters}>
                  {filterGroup(styles, "style", "Styles", (arr) =>
                    reverse(sortBy(keys(arr), (n) => arr[n].length))
                  )}
                  {filterGroup(locations, "location", "Locations", (arr) =>
                    reverse(sortBy(keys(arr), (n) => arr[n].length))
                  )}
                  {filterGroup(
                    prices,
                    "price",
                    "Prices",
                    (arr) => keys(arr).sort(),
                    (p) => dispPrices[p]
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={classes.grid}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              className={classes.table}
              disableSelectionOnClick
              disableColumnMenu
              // components={{
              // Pagination: CustomPagination,
              // }}
              onRowClick={(c) => {
                window.location.href = process.env.PUBLIC_URL + "/" + c.row.url;
              }}
            />
          </div>
          <div
            className={!isMobile ? classes.container : classes.containerMobile}
          >
            <p className={classes.p}>Notes</p>
            <ul>
              <li className={classes.li}>All prices are in USD.</li>
              <li className={classes.li}>
                A resturant's price estimate is for each person.
              </li>
              <li className={classes.li}>
                This blog is WIP, many more restaurants to come soon. :)
              </li>
              <li className={classes.li}>
                Ratings correspond to: [10 - lifechanging experience], [9 -
                perfectly executed meal], [8 - strongly recommend], [7 - would
                recommend], [6 - would recommend trying once],
                [5 - recommend if you're into the cuisine], [less than 4 - would
                not recommend]
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Food);
