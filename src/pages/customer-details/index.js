import React, { useState } from "react";
import { withRouter } from "react-router";

import Tabs from "../../common-components/Tabs";
import tabs from "./config/tabs";
import content from "./config/content";
import TabContent from "./TabContent";
import { MajorDetails, Detail, Label, Value, TabContainer } from "./styles";

const CustomerDetailsPage = () => {
  const [tab, setTab] = useState("customer_details");
  return (
    <>
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

export default withRouter(CustomerDetailsPage);
