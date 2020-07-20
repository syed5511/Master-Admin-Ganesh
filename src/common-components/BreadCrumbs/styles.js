import styled from "styled-components";
import BBreadcrumb from "react-bootstrap/Breadcrumb";
const { Item: BItem } = BBreadcrumb;

export const BreadCrumb = styled(BBreadcrumb)`
  .breadcrumb {
    background-color: #fff;
    padding: 0;
    margin: 20px 0;
  }
`;

export const Item = styled(BItem)`
  &.breadcrumb-item {
    display: flex;
    font-size: 16px;
    line-height: 25px;
    color: #306bf3;
  }
  &.breadcrumb-item.active {
    color: #090c1c;
  }
  &.breadcrumb-item + .breadcrumb-item::before {
    content: "›";
  }
`;
