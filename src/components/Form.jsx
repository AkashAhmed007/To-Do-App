import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"", done: false});
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"", done: false});
  };
  return (
    <form className={styles.TodoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoInput}
          onChange={(e) => setTodo({name: e.target.value , done: false})}
          type="text"
          value={todo.name}
          placeholder="Enter Todo Item here..."
          required
        ></input>
        <button className={styles.TodoButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
