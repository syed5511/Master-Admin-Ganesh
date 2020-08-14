import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./common-components/Layout";
import history from "./history";
import publicRoutes from "./config/publicRoutes";
import pageOptions from "./config/pageOptions";

const LoginPage = lazy(() => import("./pages/login"));
const SignUpPage = lazy(() => import("./pages/signup"));
const ProductsPage = lazy(() => import("./pages/products"));
const DeliveryPage = lazy(() => import("./pages/delivery"));
const KitchenPage = lazy(() => import("./pages/kitchen"));
const CustomerPage = lazy(() => import("./pages/customer"));
const AddProductPage = lazy(() => import("./pages/add-product"));
const KitchenDetailsPage = lazy(() => import("./pages/kitchen-details"));
const CustomerDetailsPage = lazy(() => import("./pages/customer-details"));

const Loader = () => <div className="spinner-border"></div>;

const App = () => {
  return (
    <Router history={history}>
      <Layout pageOptions={pageOptions} publicRoutes={publicRoutes}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
          </Switch>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
          </Switch>
          <Switch>
            <Route exact path="/signup" component={SignUpPage} />
          </Switch>
          <Switch>
            <Route exact path="/products" component={ProductsPage} />
          </Switch>
          <Switch>
            <Route exact path="/delivery" component={DeliveryPage} />
          </Switch>
          <Switch>
            <Route exact path="/kitchen" component={KitchenPage} />
          </Switch>
          <Switch>
            <Route exact path="/customer" component={CustomerPage} />
          </Switch>
          <Switch>
            <Route
              exact
              path="/products/add-product"
              component={AddProductPage}
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/kitchen/kitchen-details"
              component={KitchenDetailsPage}
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/customer/customer-details"
              component={CustomerDetailsPage}
            />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
