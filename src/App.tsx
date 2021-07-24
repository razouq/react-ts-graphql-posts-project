import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import CreatePost from "./components/CreatePost";
import ListPosts from "./components/ListPosts";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/create-post">
          <CreatePost />
        </Route>
        <Route exact path="/">
          <ListPosts />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
