import React from "react";

import Accordion from "../../../../../common-components/Accordion";
import Header from "./Header";

const Body = ({ list: propList }) => {
  const list = propList.map((item, i) => {
    return {
      cardKey: `outer_accordion_${i}`,
      header: () => <Header list={item.subscription_details || {}} />,
      body: () => item.orders.map((data) => <div>Ab</div>),
    };
  });
  return <Accordion list={list} />;
};

export default Body;
