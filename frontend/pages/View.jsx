import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import todoService from '../ApiService/ApiService';

function View() {
  const [todo, setTodo] = useState([]);
  const { _id } = useParams();
  
 
    async function getDetail(_id) {
      const res = await todoService.getToDoDetailById(_id);
      console.log(res);
      if (res.status) {
        setTodo(res.data);
      }
    }
    useEffect (()=>{
    // if () {
      getDetail(_id);
    // }
  }, [_id]);
  if (!todo) return;
  return (
    <div>
      <h1>ToDo Detail</h1>
      {todo.map(todos => (
        <p key={todos.id}>{todos.text}</p>
      ))}
    </div>
  );
  
}

export default View;
