import React, {
  forwardRef,
  useRef,
  useEffect,
  createRef,
  Fragment,
} from "react";
import { range } from "lodash";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import restaurants from "../../data/restaurants";
import NavBar from "../../components/NavBar";
import ModalImage from "react-modal-image";

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
  }, [Math.min(2, data.images)]);

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
  const images = (
    <div className={classes.images}>
      {range(2, data.images).map((i) => {
        return (
          <div>
            <Image ref={elRefs[i]} i={i} />
            <Tippy
              content={data.captions[i]}
              reference={elRefs[i]}
              theme="material"
            />
          </div>
        );
      })}
    </div>
  );
  const imagesHead = (
    <div className={classes.images}>
      {range(2).map((i) => {
        return (
          <div>
            <Image ref={headElRefs[i]} i={i} />
            <Tippy
              content={data.captions[i]}
              reference={headElRefs[i]}
              theme="material"
            />
          </div>
        );
      })}
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
              <div className={classes.header}>Location: <a className={classes.a} href={data.googleMaps}>{data.location}</a></div>
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
          {imagesHead}
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
