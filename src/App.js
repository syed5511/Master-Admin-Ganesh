// import React, { lazy, Suspense } from "react";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import "./App.css";
// import history from "./history";

// const Header = lazy(() => import("./components/common/Header"));
// const Footer = lazy(() => import("./components/common/Footer"));
// const DashBoard = lazy(() => import("./components/DashBoard"));
// const ProductList = lazy(() => import("./components/pages/ProductList"));
// const AddProduct = lazy(() => import("./components/pages/AddProduct"));
// const DeliveryList = lazy(() => import("./components/pages/DeliveryList"));
// const RegisteredKitchen = lazy(() =>
//   import("./components/pages/Kitchen/RegisteredKitchen")
// );
// const KitchenDetail = lazy(() =>
//   import("./components/pages/Kitchen/KitchenDetail")
// );
// const CustomerList = lazy(() =>
//   import("./components/pages/Customer/CustomerList")
// );
// const CustomerDetail = lazy(() =>
//   import("./components/pages/Customer/CustomerDetail")
// );

// const Loader = () => <div className="spinner-border"></div>;

// const App = () => {
//   return (
//     <Router history={history}>
//       <div className="App">
//         <Suspense fallback={<Loader />}>
//           <Header />
//           <Switch>
//             <Route exact path="/" component={DashBoard} />
//             <Route exact path="/products" component={ProductList} />
//             <Route exact path="/products/addproduct" component={AddProduct} />
//             <Route exact path="/delivery" component={DeliveryList} />
//             <Route
//               exact
//               path="/registeredkitchen"
//               component={RegisteredKitchen}
//             />
//             <Route
//               exact
//               path="/registeredkitchen/edit"
//               component={KitchenDetail}
//             />
//             <Route exact path="/customers" component={CustomerList} />
//             <Route exact path="/customers/edit" component={CustomerDetail} />
//             {/* using data
//             <Route
//               exact
//               path="/registeredkitchen/:id"
//               component={KitchenDetail}
//             /> */}
//           </Switch>
//           <Footer />
//         </Suspense>
//       </div>
//     </Router>
//   );
// };

// export default App;

// This is to test GITHUB tags
// This is the secong test tag for v1.1
// this is the third tag to test for v1.2

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
    <Layout pageOptions={pageOptions} publicRoutes={publicRoutes}>
      <Router history={history}>
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
      </Router>
    </Layout>
  );
};

export default App;
