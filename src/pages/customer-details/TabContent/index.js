import React from "react";

import List from "./List";
import AccodionComponent from "./AccodionComponent";

const TabContent = ({ content }) => {
  switch (content.contentType) {
    case "list":
      return <List list={content.list || []} />;
    case "accordion":
      return <AccodionComponent list={content.list || []} />;
    default:
      return null;
  }
};

export default TabContent;
