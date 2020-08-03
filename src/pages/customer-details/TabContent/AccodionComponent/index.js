import React from "react";

import Accordion from "../../../../common-components/Accordion";
import Header from "./Header";
import Body from "./Body";

const AccordionComponent = ({ list: propList }) => {
  const list = propList.map((item, i) => ({
    cardKey: `outer_accordion_${i}`,
    header: () => <Header list={item.subscription_details || {}} />,
    body: () => <Body list={item.orders || []} />,
  }));
  return <Accordion list={list} />;
};

export default AccordionComponent;
