import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.component}>
      <div className={!isMobile ? classes.container : classes.containerMobile}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar} variant="dense">
            <Link to="/" class="text-link">
              <div className={classes.leftSegment}>Home</div>
            </Link>
            <div className={classes.leftAppbar}>
              <Link to="/food" class="text-link">
                <div className={classes.segment}>Food</div>
              </Link>
              <Link to="/projects" class="text-link">
                <div className={classes.segment}>Projects</div>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default withStyles(styles)(NavBar);
