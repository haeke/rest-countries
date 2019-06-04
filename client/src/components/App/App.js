import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Countries from "../Countries/Countries";
import CountryDisplay from "../CountryDisplay/CountryDisplay";
import Header from "../Header/Header";
import useToggle from "../../hooks/useToggle";
// The Routes for Countries and CountryDisplay are render props because we need to pass the on boolean value to determine the background color and font colors when switching from light and dark themes.

const App = () => {
  const { on, toggle } = useToggle();
  return (
    <main className={on ? "newBody" : "mainConatiner"}>
      <Router>
        <Header toggle={toggle} on={on} />
        <Switch>
          <Route
            path="/"
            exact
            component={props => <Countries on={on} {...props} />}
          />
          <Route
            path="/country/:name"
            exact
            component={props => <CountryDisplay on={on} {...props} />}
          />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
