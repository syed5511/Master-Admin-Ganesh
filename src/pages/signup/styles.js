import styled from "styled-components";

export const Form = styled.form`
  &.form-signup {
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: auto;
  }

  .signup-submit {
    width: 100%;
    height: 56px;
    margin-left: 0;
    font-size: 18px;
  }
`;

export const Row = styled.div`
  margin-right: 0;
  margin-left: 0;
`;

export const Col = styled.div`
  padding: 0 8px;
  &.left {
    padding-left: 0;
  }
  &.right {
    padding-right: 0;
    &.form-label-group > label {
      left: 8px;
    }
  }
  @media (max-width: 576px) {
    padding: 0;
    &.right {
      &.form-label-group > label {
        left: 0;
      }
    }
  }
`;
