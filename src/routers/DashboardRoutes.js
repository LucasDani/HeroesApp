import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/ui/NavBar";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Home } from "../components/ui/Home";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/home" component={Home} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
