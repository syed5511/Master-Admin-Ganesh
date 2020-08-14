import styled from "styled-components";
import BRow from "react-bootstrap/Row";
import BCol from "react-bootstrap/Col";

export const Container = styled.footer`
  background-color: #f3f3f3;
  border-top: 1px solid #bebebe;
`;

export const Row = styled(BRow)`
  margin-left: 0;
  margin-right: 0;
  padding: 12px 20px;
`;

export const Col = styled(BCol)`
  padding: 0;
  font-size: 16px;
  line-height: 21px;
  text-align: right;
`;
