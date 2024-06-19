import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodos = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todos,
          completed: !todos.completed,
          completedAt: !todos.completed ? new Date().toISOString() : null,
        };
      }
      return todos;
    });
    setTodos(newTodos);
  };
  return (
    <TodoContext.Provider vaue={{ todos, addTodos, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  return context;
};
