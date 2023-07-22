import { useEffect, useState } from "react";
import axios from "axios";

function ShowTodo({ refresh }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const resp = await axios.get("http://localhost:3000/todos");
        setTodos(resp.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setLoading(false);
      }
    }

    fetchTodos();
  }, [refresh]); 
  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowTodo;
