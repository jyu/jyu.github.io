const styles = (theme) => ({
  component: {
    backgroundColor: "#222",
    minHeight: "100vh",
    minWidth: "920px",
    paddingBottom: "4em",
  },
  container: {
    padding: "0em 8em 1em 8em",
    width: 920,
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
    marginBottom: "0.5em",
  },
  a: {
    color: "#c2c2c2",
  },
  table: {
    color: "#c2c2c2 !important",
    cursor: "pointer",
  },
  grid: {
    height: 630,
    width: 920,
    margin: "auto",
    marginBottom: "1em",
  },
  li: {
    color: "#c2c2c2",
    marginBottom: "0.5em",
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
  },
  filter: {
    color: "#c2c2c2",
    marginTop: "0.5em",
    marginRight: "0.5em",
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
});

export default styles;
