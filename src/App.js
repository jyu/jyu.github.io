import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Food from "./routes/Food";
import Projects from "./routes/Projects";

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/food"} component={Food} />
        <Route exact path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
