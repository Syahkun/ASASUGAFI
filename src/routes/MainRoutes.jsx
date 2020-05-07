import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import CovidPage from "../pages/CovidPage";
import CovidDetail from "../pages/CovidDetail";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/covid" component={CovidPage} />
          <Route path="/covid-news/:category" component={CovidPage} />
          {/*<Route exact path="/country/" component={CovidDetail} />*/}
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
