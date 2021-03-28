import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { keys } from "lodash";
import Home from "./routes/Home";
import Food from "./routes/Food";
import Intro from "./routes/Intro";
import Projects from "./routes/Projects";
import SpotRecs from "./routes/ProjectPages/SpotRecs";
import Restaurant from "./routes/Restaurant";
import restaurants from "./data/restaurants";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/spotRecs" component={SpotRecs} />
        {keys(restaurants).map((key) => (
          <Route
            key={key}
            exact
            path={"/" + key}
            render={(props) => <Restaurant {...props} name={key} />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
