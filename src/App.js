import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Posts from "./Components/Posts/Posts";
import NewPost from "./Components/NewPost/NewPost";
import SpecificPost from "./Components/SpecificPost/SpecificPost";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/test-app">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/allposts" component={Posts} />
        <Route path="/specificpost" component={SpecificPost} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </Router>
  );
}

export default App;
