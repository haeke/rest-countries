import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Countries from "../Countries/Countries";
import Header from "../Header/Header";

const App = () => {
  return (
    <main className="mainContainer">
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Countries} />
          </Switch>
        </Router>
      </div>
    </main>
  );
};

export default App;
