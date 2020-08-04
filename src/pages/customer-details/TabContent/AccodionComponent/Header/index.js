import React, { useState } from "react";

import Modal from "../../../../../common-components/Modal";
import SubscriptionInvoice from "./SubscriptionInvoice";
import {
  Container,
  Detail,
  Value,
  Label,
  ComplementaryButton,
  Items,
  InvoiceDetails,
  Actions,
} from "./styles";

const Header = ({ list }) => {
  const [showInvoice, setShowInvoice] = useState(false);
  const renderItem = (data, type = null) => (
    <Detail key={data.key}>
      <Label>{data.label}</Label>
      <Value className={type}>{data.value}</Value>
    </Detail>
  );

  const renderItems = (item) => {
    switch (item.func) {
      case "outer_header":
        return renderItem(item);
      case "outer_header_orange":
        return renderItem(item, "orange");
      default:
        return null;
    }
  };

  return (
    <Container
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Items>{list.map(renderItems)}</Items>
      <Actions>
        <InvoiceDetails
          onClick={(e) => {
            e.stopPropagation();
            setShowInvoice(true);
          }}
        >
          i
        </InvoiceDetails>
        <ComplementaryButton
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          + Comp Plate
        </ComplementaryButton>
      </Actions>
      {showInvoice && (
        <Modal
          title="Subscription Invoice"
          show={showInvoice}
          onClose={() => {
            setShowInvoice(false);
          }}
        >
          <SubscriptionInvoice />
        </Modal>
      )}
    </Container>
  );
};

export default Header;
