import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminMain from "./Admin/AdminMain";
import RetoolIframe from "./Admin/RetoolIframe";

import "./App.css";
import ScannerMain from "./Scanner/ScannerMain";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/scan">
            <ScannerMain />
          </Route>
          <Route path="/admin">
            <AdminMain />
          </Route>
          <Route path="/retool">
            <RetoolIframe />
          </Route>
          <Route path="/">
            <ScannerMain />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
