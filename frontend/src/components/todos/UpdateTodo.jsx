import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { BsPencilSquare } from "react-icons/bs";

function UpdateTodo({ todoId, todoTitle, todoDescription, onUpdate }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(todoTitle);
  const [description, setDescription] = useState(todoDescription);
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/api/todos/${todoId}`, {
        title,
        description
      });
      if (response.data.success) {
        
        handleClose(); 
        alert(response.data.message);
        onUpdate(); 
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du Todo', error);
    }
  };

  return (
    <>
      
      <button type="button" onClick={handleShow} className="btn btn-warning">
                <BsPencilSquare /> 
        </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="updateForm">
            <Form.Group className="mb-3" controlId="title">
              <FloatingLabel controlId="floatingTextarea2" label="Title">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                  as="textarea"
                  placeholder="Description"
                  style={{ height: '100px' }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" type="submit" form="updateForm"> Submit </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
}

export default UpdateTodo;