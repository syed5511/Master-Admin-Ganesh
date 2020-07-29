import React, { useState } from "react";
import { func, arrayOf, shape } from "prop-types";

import { TabContainer, UL, LI } from "./styles";

const Tabs = ({ tabs, onTabChange }) => {
  const [active, setActive] = useState(tabs[0].key);
  return (
    <TabContainer>
      <UL>
        {tabs.map((tab) => (
          <LI
            key={tab.key}
            className={active === tab.key ? "active" : ""}
            onClick={() => {
              setActive(tab.key);
              onTabChange(tab.key);
            }}
          >
            {tab.title}
          </LI>
        ))}
      </UL>
    </TabContainer>
  );
};

Tabs.propTypes = {
  tabs: arrayOf(shape({})),
  onTabChange: func,
};

Tabs.defaultProps = {
  tabs: [],
  onTabChange: () => {},
};

export default Tabs;
