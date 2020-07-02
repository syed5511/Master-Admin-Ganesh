import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import history from "./history";

const Header = lazy(() => import("./components/common/Header"));
const Footer = lazy(() => import("./components/common/Footer"));
const DashBoard = lazy(() => import("./components/DashBoard"));
const Loader = () => <div className="spinner-border"></div>;

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Header />
          <Switch>
            <Route exact path="/" component={DashBoard} />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
