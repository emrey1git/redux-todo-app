import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo, clearTodos, removeTodo } from "./redux/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((store) => store.todo);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const buttonClick = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: inputValue,
    };

    dispatch(addTodo(newTodo));
    setInputValue("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div>
      <h2>Todo Listesi</h2>
      <form onSubmit={buttonClick}>
        <input
          type="text"
          placeholder="Görev Giriniz"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Ekle</button>
        <button type="button" onClick={() => dispatch(clearTodos())}>Temizle</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button 
              style={{ marginLeft: "10px" }} 
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
