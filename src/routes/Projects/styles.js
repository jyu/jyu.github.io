const styles = (theme) => ({
  component: {
    backgroundColor: "#222",
  },
  container: {
    padding: "2em 8em",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "100vh",
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
  p: {
    color: "#c2c2c2",
  },
  a: {
    color: "#c2c2c2",
  },
  projects: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  projectImage: {
    width: "200px",
    marginBottom: "10px",
  },
  project: {
    display: "block",
    textAlign: "left",
    width: "200px",
    fontSize: "1em",
    marginBottom: "12px",
  },
  projectName: {
    marginBottom: "10px",
    fontWeight: "500",
    color: "#c2c2c2",
  },
  flow: {
    marginBottom: "10px",
    color: "#c2c2c2",
    textDecoration: "none",
  },
});

export default styles;
