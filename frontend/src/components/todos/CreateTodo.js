import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

function CreateTodo({ refreshTodos }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleClose = () => {
    setShow(false);
    setTitle('');
    setDescription('');
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/todos', {
        title,
        description
      });
      if (response.data.success) {
        setSuccessMessage(response.data.message);
        handleClose(); 
        alert(response.data.message);
        
        refreshTodos(); 
      }
    } catch (error) {
      console.error('Erreur lors de la création du Todo', error);
    }
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Ajouter Todo
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="form">
            <Form.Group className="mb-3" controlId="title">
              <FloatingLabel controlId="floatingTextarea2" label="Title">
                <Form.Control
                  type="text"
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                  as="textarea"
                  placeholder="Laissez une description ici"
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
          <Button variant="primary" type="submit" form="form"> Submit </Button>
        </Modal.Footer>
      </Modal>
      {successMessage && (
        <div className="alert alert-success mt-3">{successMessage}</div>
      )}
    </>
  );
}

export default CreateTodo;
