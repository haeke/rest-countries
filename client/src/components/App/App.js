import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Countries from "../Countries/Countries";

const App = () => {
  return (
    <main>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Countries} />
          </Switch>
        </Router>
      </div>
    </main>
  );
};

export default App;
