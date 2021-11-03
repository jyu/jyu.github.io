const styles = (theme) => ({
  component: {
    backgroundColor: "#222",
    minHeight: "100vh",
    paddingBottom: "4em",
  },
  container: {
    padding: "0em 8em 1em 8em",
    width: 920,
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
  p: {
    color: "#c2c2c2",
    marginBottom: "0.5em",
    marginTop: "0",
    fontSize: "1em",
  },
  foods: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  card: {
    display: "block",
    textAlign: "left",
    width: "200px",
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
});

export default styles;
