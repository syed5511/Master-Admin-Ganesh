import React from "react";

import Accordion from "../../../../../common-components/Accordion";
import InnerHeader from "./InnerHeader";
import InnerBody from "./InnerBody";

const Body = ({ list: propList }) => {
  const list = propList.map((item, i) => {
    const headerList = item.header_details;
    const bodyList = item.body_details;
    return {
      cardKey: `inner_accordion_${i}`,
      header: () => <InnerHeader headerList={headerList} />,
      body: () => <InnerBody bodyList={bodyList} />,
    };
  });
  return <Accordion list={list} theme="blue" />;
};

export default Body;
