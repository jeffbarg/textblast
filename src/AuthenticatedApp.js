import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticatedHome from "./pages/AuthenticatedHome";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

export default () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <AuthenticatedHome />
        </Route>
      </Switch>
    </Router>
  );
};
