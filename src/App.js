import React from "react";
import { Search, SuperHero, Home, Layout, Favourites } from "./views";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Layout>
            <Route path="/">
              <Home />
            </Route>
            <Route exact path="/search/:name">
              <Search />
            </Route>
            <Route exact path="/">
              <Favourites />
            </Route>
            <Route path="/superhero/:id">
              <SuperHero />
            </Route>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}
