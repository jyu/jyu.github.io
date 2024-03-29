const styles = (theme) => ({
  component: {
    overflow: "hidden",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
  },
  container: {
    padding: "4em 6em",
  },
  containerMobile: {
    padding: "2em",
  },
  h1: {
    fontSize: "3em",
    fontWeight: 500,
    marginTop: 0,
    marginBottom: "0.5rem",
    color: "#fff",
  },
  p: {
    color: "#c2c2c2",
  },
  a: {
    color: "#c2c2c2",
  },
  button: {
    color: "#c2c2c2",
    cursor: "pointer",
  },
  image: {
    position: "absolute",
    bottom: "4em",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    color: "#c2c2c2",
    verticalAlign: "middle",
    marginBottom: "1em",
  },
});

export default styles;
