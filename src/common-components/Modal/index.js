import React from "react";
import { bool, string, func, node } from "prop-types";

import { BModal } from "./styles";
const { Header, Title, Body } = BModal;

const Modal = ({
  allowKeyBoard,
  backdrop,
  closeButton,
  show,
  onClose,
  title,
  children,
}) => {
  return (
    <BModal
      show={show}
      onHide={onClose}
      backdrop={backdrop}
      keyboard={allowKeyBoard}
    >
      <Header closeButton={closeButton}>
        {title && <Title>{title}</Title>}
      </Header>
      <Body>{children}</Body>
    </BModal>
  );
};

Modal.propTypes = {
  allowKeyBoard: bool,
  backdrop: string,
  closeButton: bool,
  show: bool,
  onClose: func,
  title: string,
  children: node,
};

Modal.defaultProps = {
  allowKeyBoard: false,
  backdrop: "static",
  closeButton: true,
  show: false,
  onClose: () => {},
  title: null,
  children: node,
};

export default Modal;
