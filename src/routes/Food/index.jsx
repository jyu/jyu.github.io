import React from "react";
import { values, sortBy, reverse } from "lodash";

import {
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import styles from "./styles";
import { DataGrid } from "@material-ui/data-grid";
// import Pagination from "@material-ui/lab/Pagination";
// import PaginationItem from "@material-ui/lab/PaginationItem";
import NavBar from "../../components/NavBar";

import restaurants from "../../data/restaurants";

const prices = ["$", "$$", "$$$", "$$$$", "$$$$$"];

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
  const isMobile = window.innerWidth <= 800;
  const columns = [
    { field: "name", headerName: "Name", width: 250, sortable: false },
    { field: "style", headerName: "Style", width: 150, sortable: false },
    {
      field: "rating",
      headerName: "Rating",
      width: 100,
    },
    {
      field: "location",
      headerName: "Location",
      sortable: false,
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      sortable: true,
      width: 100,
      valueGetter: (params) => prices[params.row.price],
    },
    {
      field: "lastVisited",
      headerName: "Last Visit",
      width: 150,
    },
  ];

  const rows = reverse(sortBy(values(restaurants), (r) => r.lastVisited));
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
              <p className={classes.p}>
                A list of food I've eaten. Start{" "}
                <a className={classes.a} href="/intro">
                  here
                </a>
                .
              </p>
              <p className={classes.p}>
                WIP, many more restaurants to come soon. :)
              </p>
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
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Food);
