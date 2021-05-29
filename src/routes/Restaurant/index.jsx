import React, { forwardRef, useEffect, createRef } from "react";
import { range } from "lodash";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { isMobile } from "react-device-detect";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import restaurants from "../../data/restaurants";
import NavBar from "../../components/NavBar";
import ModalImage from "react-modal-image";
import YouTube from "react-youtube";

const requestImageFile = require.context(
  "../../media/restaurants",
  true,
  /.jpg$/
);

const prices = [
  "$ (1-10)",
  "$$ (11-30)",
  "$$$ (31-60)",
  "$$$$ (61-100)",
  "$$$$$ (101+)",
];

function Restaurant(props) {
  const { classes, name } = props;
  const data = restaurants[name];

  useEffect(() => {
    document.title = data.name;
  }, []);

  const [elRefs, setElRefs] = React.useState([]);
  useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(data.images)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [data.images]);

  const [headElRefs, setHeadElRefs] = React.useState([]);
  useEffect(() => {
    // add or remove refs
    setHeadElRefs((headElRefs) =>
      Array(Math.min(2, data.images))
        .fill()
        .map((_, i) => headElRefs[i] || createRef())
    );
  }, [data.images]);

  const Image = forwardRef((props, ref) => {
    return (
      <div
        ref={ref}
        className={!isMobile ? classes.imgBox : classes.imgBoxMobile}
      >
        <ModalImage
          key={props.i}
          small={requestImageFile(`./${name}/${props.i}.jpg`).default}
          large={requestImageFile(`./${name}/${props.i}.jpg`).default}
          className={!isMobile ? classes.img : classes.imgMobile}
          alt={data.captions[props.i]}
        />
      </div>
    );
  });
  const numImagesHead = Math.min(data.images, 2);
  const images = data.images > numImagesHead && (
    <div className={classes.images}>
      {range(numImagesHead, data.images).map((i) => (
        <div key={i}>
          <Image ref={elRefs[i]} i={i} />
          {!isMobile && (
            <Tippy
              content={data.captions[i]}
              reference={elRefs[i]}
              theme="material"
            />
          )}
        </div>
      ))}
    </div>
  );
  const imagesHead = (
    <div className={classes.images}>
      {range(numImagesHead).map((i) => (
        <div key={i}>
          <Image ref={headElRefs[i]} i={i} />
          {!isMobile && (
            <Tippy
              content={data.captions[i]}
              reference={headElRefs[i]}
              theme="material"
            />
          )}
        </div>
      ))}
    </div>
  );
  const video = data.video;

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
              <div className={classes.header}>
                Location:{" "}
                <a className={classes.a} href={data.googleMaps}>
                  {data.location} {!!data.district && "- " + data.district}
                </a>
              </div>
              <div className={classes.header}>Style: {data.style}</div>
              <div className={classes.header}>Rating: {data.rating}/10</div>
              <div className={classes.header}>Price: {prices[data.price]}</div>
              <div className={classes.header}>
                Last Visited: {data.lastVisited}
              </div>
              {data.michelin && (
                <div className={classes.header}>{data.michelin}</div>
              )}
            </div>
          </div>
          {imagesHead}
          <div
            className={
              !isMobile ? classes.containerText : classes.containerTextMobile
            }
          >
            {data.text.map((t) => (
              <p className={classes.p} key={t}>
                {t}
              </p>
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
                <li className={classes.li} key={d}>
                  {d}
                </li>
              ))}
            </ul>
            {video && (
              <div>
                <p className={classes.p}>
                  Video that is not mine but does a great job representing the
                  place:
                </p>
                <YouTube
                  videoId={video.replace(
                    "https://www.youtube.com/watch?v=",
                    ""
                  )}
                  opts={{
                    playerVars:
                      video.indexOf("t=") !== -1
                        ? {
                            fs: 1,
                            start: Number(
                              video.substring(
                                video.indexOf("t=") + 2,
                                video.length
                              )
                            ),
                          }
                        : {},
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Restaurant);
