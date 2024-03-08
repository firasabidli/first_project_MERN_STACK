import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


import CreateTodo from './CreateTodo';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    refreshTodos(); 
  }, []);

  const refreshTodos = () => {
    axios.get('http://localhost:3001/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Erreur de chargement des Todos', error));
  };

  return (
    <div>
      <h2 className="text-center">Todo List</h2>
      <CreateTodo  OnCreate={refreshTodos} />
     
      <table className="table table-hover table-bordered text-center mt-4 ">
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
                <UpdateTodo
                  todoId={todo._id}
                  todoTitle={todo.title}
                  todoDescription={todo.description}
                  onUpdate={refreshTodos}
                />
              
              {' '}
              <DeleteTodo todoId={todo._id} onDelete={refreshTodos}/>
              
            </td>
          </tr>
        ))}

        </tbody>
      </table>
      
    </div>
   
  );
};

export default TodoList;
