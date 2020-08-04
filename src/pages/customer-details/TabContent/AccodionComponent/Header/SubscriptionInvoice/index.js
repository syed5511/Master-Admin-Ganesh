import React from "react";

import { Container, Detail, Label, Value } from "./styles";

const SubscriptionInvoice = () => {
  return (
    <Container>
      <Detail>
        <Label>Sub Total</Label>
        <Value>$69.00</Value>
      </Detail>
      <Detail>
        <Label>Delivery</Label>
        <Value>Free</Value>
      </Detail>
      <Detail>
        <Label>Discount</Label>
        <Value>2 Free Plates</Value>
      </Detail>
      <Detail>
        <Label>Promo</Label>
        <Value className="bold">M567UIO</Value>
      </Detail>
      <Detail className="total">
        <Label className="bold">Total</Label>
        <Value>$69.00</Value>
      </Detail>
      <Label className="bold black">05/17/2020</Label>
      <Label className="bold black m-t-8">Stripe Invoice #</Label>
      <Label className="black">23456789990000</Label>
      <Label className="bold black m-t-8">Plates 4 + 2 = 6</Label>
      <Label className="bold black m-t-8">4 Person Plan</Label>
    </Container>
  );
};

export default SubscriptionInvoice;
