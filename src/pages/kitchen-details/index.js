import React, { useState } from "react";
import { withRouter } from "react-router";

import Tabs from "../../common-components/Tabs";
import tabs from "./config/tabs";
import content from "./config/content";
import renderValue from "./utils/renderValue";
import {
  MajorDetails,
  Detail,
  Label,
  Value,
  TabContainer,
  TabContent,
} from "./styles";

const KitchenDetailsPage = () => {
  const [tab, setTab] = useState("kitchen_details");
  return (
    <>
      <MajorDetails>
        <Detail>
          <Label>Kitchen Email</Label>
          <Value>syedhaq@gmail.com</Value>
        </Detail>
        <Detail>
          <Label>Kitchen Name</Label>
          <Value>Syed Kitchen</Value>
        </Detail>
      </MajorDetails>
      <TabContainer>
        <Tabs
          tabs={tabs}
          onTabChange={(v) => {
            setTab(v);
          }}
        />
        <TabContent>
          {content[tab].map((item) => (
            <Detail key={item.label} className="column">
              <Label>{item.label}</Label>
              <Value className="content">{renderValue(item)}</Value>
            </Detail>
          ))}
        </TabContent>
      </TabContainer>
    </>
  );
};

export default withRouter(KitchenDetailsPage);
