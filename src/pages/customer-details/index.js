import React, { useState } from "react";

import Tabs from "../../common-components/Tabs";
import BreadCrumbs from "../../common-components/BreadCrumbs";
import tabs from "./config/tabs";
import content from "./config/mock-content";
import TabContent from "./TabContent";
import { MajorDetails, Detail, Label, Value, TabContainer } from "./styles";

const CustomerDetailsPage = () => {
  const [tab, setTab] = useState("customer_details");
  return (
    <>
      <BreadCrumbs
        list={[
          { text: "Customer List", active: false, href: "/customer" },
          {
            text: tab
              .split("_")
              .map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`)
              .join(" "),
            active: true,
          },
        ]}
      />
      <MajorDetails>
        <Detail>
          <Label>Customer ID</Label>
          <Value>syedhaq@gmail.com</Value>
        </Detail>
      </MajorDetails>
      <TabContainer>
        <Tabs
          tabs={tabs}
          onTabChange={(v) => {
            setTab(v);
          }}
        />
        <TabContent content={content[tab] || {}} />
      </TabContainer>
    </>
  );
};

export default CustomerDetailsPage;
