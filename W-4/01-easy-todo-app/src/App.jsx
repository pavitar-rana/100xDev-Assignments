/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  axios.get("http://localhost:3000/todos").then((response) => {
    console.log(response.data);
  });

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <input id="title" type="text" placeholder="Title" /> <br />
        <input id="description" type="text" placeholder="Description" />
        <button onClick={create} id="createBtn">
          Create Todo
        </button>
        <div id="listArea"></div>
      </div>
    </>
  );


}

function create() {
  const newTodo = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
  };
  axios.post("http://localhost:3000/todos", newTodo).then((resp) => {
    console.log(resp.data);
  });
}

function ShowTodo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
