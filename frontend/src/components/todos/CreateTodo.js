import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosAddCircleOutline } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function CreateTodo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
                  <IoIosAddCircleOutline /> Ajouter Todo
                </button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="title">
       
      <FloatingLabel controlId="floatingTextarea2" label="Title">
      <Form.Control type="text" placeholder="Enter the title" />
       </FloatingLabel>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
      <FloatingLabel controlId="floatingTextarea2" label="description">
        <Form.Control
          as="textarea"
          placeholder="Leave a description here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTodo;