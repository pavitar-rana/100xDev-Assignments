import { useState } from "react";
import axios from "axios";
import ShowTodo from "./components/ShowTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const create = async () => {
    const newTodo = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
    };

    try {
      await axios.post("http://localhost:3000/todos", newTodo);
      console.log("Todo created successfully");
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <input id="title" type="text" placeholder="Title" /> <br />
        <input id="description" type="text" placeholder="Description" />
        <button onClick={create} id="createBtn">
          Create Todo
        </button>
        <div id="listArea">
          <ShowTodo refresh={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
