const styles = (theme) => ({
  component: {
    backgroundColor: "#222",
    minHeight: "100vh",
  },
  container: {
    padding: "2em 8em",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  containerMobile: {
    padding: "1em",
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
  imgBox: {
    height: "30vh",
    display: "block",
    marginBottom: "1em",
    marginRight: "10px",
  },
  img: {
    height: '100%',  
  },
  imgMobile: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    marginBottom: "1em",
  },
  images: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default styles;
