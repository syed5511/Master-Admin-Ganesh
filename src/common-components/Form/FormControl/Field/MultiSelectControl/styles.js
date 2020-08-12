import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  button.picky__input {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      border: 1px #161a34 solid;
      outline: none;
    }
  }
  &.error {
    button.picky__input {
      border: 1px solid red;
      &:focus {
        border: 1px solid red;
      }
    }
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
  }
  .form-check {
    padding-left: 0 !important;
    display: flex;
    margin-right: 8px !important;
  }
`;

export const SelectAllCover = styled.div``;
