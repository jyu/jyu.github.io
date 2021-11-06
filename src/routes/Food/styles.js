const styles = (theme) => ({
  component: {
    backgroundColor: "#222",
    minHeight: "100vh",
    paddingBottom: "4em",
  },
  container: {
    padding: "0em 8em 1em 8em",
    width: 900,
    marginLeft: "auto",
    marginRight: "auto",
  },
  containerLarge: {
    padding: "0em 8em 1em 8em",
    width: 1125,
    marginLeft: "auto",
    marginRight: "auto",
  },

  containerMobile: {
    padding: "2em",
  },
  h1: {
    fontSize: "3em",
    fontWeight: 500,
    marginTop: 0,
    marginBottom: "0.5em",
    color: "#fff",
  },
  h2: {
    fontSize: "2em",
    fontWeight: 500,
    marginTop: 0,
    marginBottom: "0.5em",
    color: "#fff",
  },
  p: {
    color: "#c2c2c2",
    marginBottom: "0.5em",
    marginTop: "0",
    fontSize: "1em",
  },
  buttonText: {
    cursor: "pointer",
    textDecoration: "underline",
    color: "#c2c2c2",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: "1em",
  },
  groupControls: {
    color: "#c2c2c2",
    marginTop: "0.5em",
    marginRight: "2em",
    marginBottom: "1em",
  },
  controls: {
    color: "#c2c2c2",
    marginBottom: "1em",
  },
  filter: {
    color: "#c2c2c2",
    marginTop: "0.5em",
    marginRight: "2em",
  },
  filterMobile: {
    color: "#c2c2c2",
    marginTop: "0.5em",
    marginRight: "1em",
    width: "45%",
  },
  checkbox: {
    padding: "5px",
    height: "0.7em",
  },
  filterControLabel: {
    marginLeft: "-7px",
  },
  formLabel: {
    marginBottom: "0.5em",
  },

  foodContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "start",
  },
  foodContainerMobile: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    display: "block",
    textAlign: "left",
    width: "200px",
    fontSize: "1em",
    marginBottom: "12px",
    marginRight: "25px",
  },
  cardMobile: {
    display: "block",
    textAlign: "left",
    width: "100%",
    fontSize: "1em",
    marginBottom: "12px",
  },
  link: {
    textDecoration: "none",
  },
  img: {
    width: "200px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "0.5em",
  },
  imgMobile: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "0.5em",
  },
});

export default styles;
