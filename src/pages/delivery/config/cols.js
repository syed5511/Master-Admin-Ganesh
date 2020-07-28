import React from "react";

import { Name } from "../../../common-components/common/table-items-style";
import Button from "../../../common-components/Button";
import { DeliveryZones, Group, Item, BtnWrap } from "./styles";

const cols = [
  {
    key: "state",
    heading: "State",
  },
  {
    key: "zip_codes",
    heading: "Zip Codes",
    type: "render",
    render: (r) =>
      (r.zip_codes || []).length > 0 ? (
        <Name>{r.zip_codes.join(", ")}</Name>
      ) : (
        "-"
      ),
  },
  {
    key: "kitchen_name",
    heading: "Kitchen Name",
  },
  {
    key: "zone_no",
    heading: "Zone No",
  },
  {
    key: "delivery",
    heading: "Delivery",
  },
  {
    key: "paid_delivery_zones",
    heading: "Paid Delivery Zones",
    type: "render",
    render: (r) =>
      (r.paid_delivery_zones || []).length > 0 ? (
        <DeliveryZones>
          {r.paid_delivery_zones.map((item) => (
            <Group key={item.zone_no}>
              <Item>{item.zone_no}</Item>
              {" - "}
              <Item>
                {item.currency} {item.price}
              </Item>
            </Group>
          ))}
        </DeliveryZones>
      ) : (
        "-"
      ),
  },
  {
    key: "action",
    heading: "Action",
    type: "render",
    render: (r) => (
      <BtnWrap>
        <Button theme="edit" type="button" className="editZipCode">
          Edit
        </Button>
      </BtnWrap>
    ),
  },
];

export default cols;
