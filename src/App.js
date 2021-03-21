import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Food from "./routes/Food";
import Projects from "./routes/Projects";
import SpotRecs from "./routes/ProjectPages/SpotRecs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/SpotRecs" component={SpotRecs} />
      </Switch>
    </Router>
  );
}

export default App;
