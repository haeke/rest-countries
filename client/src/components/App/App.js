import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Countries from "../Countries/Countries";
import CountryDisplay from "../CountryDisplay/CountryDisplay";
import Header from "../Header/Header";
import useToggle from "../../hooks/useToggle";

const App = () => {
  const { on, toggle } = useToggle();
  return (
    <main className={on ? "newBody" : "mainConatiner"}>
      <Router>
        <Header toggle={toggle} />
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
