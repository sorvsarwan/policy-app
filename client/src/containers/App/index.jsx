import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../../components/Header";
import Dashboard from "../../containers/Dashboard";
import EditPolicy from "../../containers/EditPolicy";
import Reports from "../../containers/Reports";
import PageNotFound from "../PageNotFound";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/edit-policy/:id" component={EditPolicy} />
        <Route exact path="/reports/month" component={Reports} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
