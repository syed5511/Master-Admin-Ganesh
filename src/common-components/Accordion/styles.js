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
        padding: 8px 12px;
        margin-bottom: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .card-body {
        padding: 8px;
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
        padding: 8px 12px;
        border-radius: 0;
        margin-bottom: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .collapse,
      .collapsing {
        background: #ffffff;
        border: 1px solid #f1f1f1;
      }
    }
  }
`;

export const Chevron = styled.div`
  &::before {
    border-style: solid;
    border-width: 2px 2px 0 0;
    content: "";
    display: flex;
    height: 8px;
    position: relative;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 8px;
  }

  &.down:before {
    top: 0;
    transform: rotate(135deg);
  }

  &.blue::before,
  &.blue.down:before {
    border-color: #fff;
  }
`;
