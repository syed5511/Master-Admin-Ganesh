import styled from "styled-components";
import BSTable from "react-bootstrap/Table";

export const BTable = styled(BSTable)`
  &.table {
    border: 1px solid #e7e7e7;
  }
  &.table-sm td,
  &.table-sm th {
    padding: 0.8rem;
    font-size: 14px;
    line-height: 19px;
    font-family: Helvetica;
  }
  &.table-sm td {
    font-weight: normal;
    vertical-align: middle;
  }
`;

export const THead = styled.thead`
  background: #f3f3f3;
`;
