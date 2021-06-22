import React from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const AnswerModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Result</h4>
        <h1 className="text-info">Hurray! Your Answer is Correct</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AnswerModal;