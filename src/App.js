import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import history from "./history";

const Header = lazy(() => import("./components/common/Header"));
const Footer = lazy(() => import("./components/common/Footer"));
const DashBoard = lazy(() => import("./components/DashBoard"));
const ProductList = lazy(() => import("./components/pages/ProductList"));
const AddProduct = lazy(() => import("./components/pages/AddProduct"));
const DeliveryList = lazy(() => import("./components/pages/DeliveryList"));

const Loader = () => <div className="spinner-border"></div>;

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Header />
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/addproduct" component={AddProduct} />
            <Route exact path="/delivery" component={DeliveryList} />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
