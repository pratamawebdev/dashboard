import React, { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ConfirmModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
  onClick: () => void;
}

const ConfirmModal = ({
  show,
  handleClose,
  title,
  children,
  onClick,
}: ConfirmModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{ backgroundColor: "#0e1b6b" }} onClick={onClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
