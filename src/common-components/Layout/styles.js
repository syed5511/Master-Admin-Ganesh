import styled from "styled-components";
import BRow from "react-bootstrap/Row";

export const Body = styled.main`
  height: 100%;
`;

export const Row = styled(BRow)`
  margin-left: 0;
  margin-right: 0;
  min-height: calc(100vh - 106px);
  overflow: hidden;
`;
