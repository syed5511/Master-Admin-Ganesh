import styled from "styled-components";
import BRow from "react-bootstrap/Row";
import BCol from "react-bootstrap/Col";
import BButton from "../../Button";

export const Container = styled.header`
  background-color: #f3f3f3;
  border-bottom: 1px solid #bebebe;
`;

export const Row = styled(BRow)`
  margin-left: 0;
  margin-right: 0;
  padding: 20px;
`;

export const Col = styled(BCol)`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Logo = styled.div`
  font-size: 22px;
  line-height: 30px;
  color: #000;
  font-weight: bold;
  flex: 0 0 140px;
  + select {
    flex: 0 0 calc(80% - 140px);
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const Greet = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: #000;
  font-weight: bold;
`;

export const Button = styled(BButton)`
  &.logout {
    padding: 4px 20px;
  }
`;
