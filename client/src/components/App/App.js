import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Countries from "../Countries/Countries";
import CountryDisplay from "../CountryDisplay/CountryDisplay";
import Header from "../Header/Header";

const App = () => {
  return (
    <main className="mainContainer">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/country/:name" exact component={CountryDisplay} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
