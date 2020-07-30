import styled from "styled-components";

export const Container = styled.div`
  &.gray {
    .card {
      border: none;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      .card-header {
        background: #f9f9f9;
        border: 1px solid #ebebeb;
        border-radius: 5px;
      }
      .collapse,
      .collapsing {
        background: #f9f9f9;
        border: 1px solid #f1f1f1;
      }
    }
  }
  &.blue {
    .card {
      border: none;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      .card-header {
        background: #091d3a;
        border: 1px solid #f1f1f1;
      }
      .collapse,
      .collapsing {
        background: #ffffff;
        border: 1px solid #f1f1f1;
      }
    }
  }
`;
