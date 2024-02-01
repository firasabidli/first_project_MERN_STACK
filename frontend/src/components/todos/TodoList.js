import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Erreur de chargement des Todos', error));
  }, []);

  return (
    <div>
      <h2>Liste des Todos</h2>

      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo._id}>
              <th scope="row">{index + 1}</th>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
              <button type="button" className="btn btn-warning">
                  <BsPencilSquare /> 
                </button>
                {' '}
                <button type="button" className="btn btn-danger">
                  <FaTrashAlt /> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
