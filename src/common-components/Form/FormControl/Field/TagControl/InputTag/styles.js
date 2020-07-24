import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  input {
    outline: none;
    border: none;
    text-indent: 8px;
  }
`;

export const Ul = styled.ul`
  padding: 0;
  list-style: none;
  outline: none;
  margin: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border-radius: 4px;
  padding: 4px;
  border: 1px solid #c2c2c2;
  min-height: 48px;
  align-items: center;
  background-color: #fff;
  &:hover {
    border: 1px #ff5016 solid;
  }
  &.focus {
    border: 2px #ff5016 solid;
  }
  &.error {
    border: 1px solid #ff0000;
  }
`;

export const Info = styled.p`
  margin: 0;
  margin-top: 8px;
  fontw-size: 12px;
  color: #9b9b9b;
  span {
    color: #333;
    font-weight: bold;
  }
  &.error {
    color: #ff0000;
    span {
      color: #ff0000;
    }
  }
`;

export const Li = styled.li`
  background-color: #efefef;
  color: #000;
  border: 1px solid #efefef;
  border-radius: 4px;
  display: flex;
  padding: 2px 6px;
  margin-bottom: 4px;
  margin-right: 4px;
  align-items: center;
  svg {
    cursor: pointer;
    margin-left: 4px;
  }
`;

export const LI = styled.li`
  width: 100%;
  input {
    width: 100%;
  }
`;
