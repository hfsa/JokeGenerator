import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Jokes from "./Jokes";
import Liked from "./Liked";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Suspense fallback={<h1>Loading Jokes..</h1>}>
            <Liked />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}
