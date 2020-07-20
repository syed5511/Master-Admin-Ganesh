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

import React, { useState } from "react";

import Layout from "./common-components/Layout";
import Table from "./common-components/Table";
import Pagination from "./common-components/Pagination";

const App = () => {
  const [page, setPage] = useState(1);
  const cols = [
    {
      key: "item_name",
      heading: "Item Name",
    },
    {
      key: "item_type",
      heading: "Item Type",
    },
    {
      key: "kitchen_name",
      heading: "Kitchen Name",
    },
    {
      key: "city",
      heading: "City",
    },
    {
      key: "zip_code",
      heading: "Zip Code",
    },
    {
      key: "serving_days",
      heading: "Serving Days",
    },
    {
      key: "status",
      heading: "Status",
      type: "render",
      render: (r) => (
        <div
          style={r.status === "Active" ? { color: "green" } : { color: "red" }}
        >
          {r.status}
        </div>
      ),
    },
  ];
  const list = [
    {
      item_name: "Chicken Biryani Chicken",
      item_type: "Main Course",
      kitchen_name: "Syed Kitchen 5511",
      city: "Chicago",
      zip_code: 60078,
      serving_days: "Sunday, Monday, Tuesday",
      status: "Active",
    },
    {
      item_name: "Chicken Biryani Chicken",
      item_type: "Main Course",
      kitchen_name: "Syed Kitchen 5511",
      city: "Chicago",
      zip_code: 60078,
      serving_days: "Sunday, Monday, Tuesday",
      status: "Inactive",
    },
  ];
  return (
    <Layout>
      <Table cols={cols} list={list} size="sm" />
      <Pagination page={page} onPageChange={setPage} total={10} />
    </Layout>
  );
};

export default App;
