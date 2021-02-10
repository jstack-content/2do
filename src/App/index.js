import React, { useContext, useEffect, useState } from 'react';

import TodoList from '../components/TodoList';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Context } from '../contexts/ThemeContext';

import logo from '../images/logo-dark.svg';
import logoLight from '../images/logo-light.svg';
import styles from './styles.scss';

export default function App() {
  // Context
  const { theme } = useContext(Context);

  // States
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');

    if (!savedTodos) {
      return [];
    }

    return JSON.parse(savedTodos);
  });
  const [newTodoText, setNewTodoText] = useState('');

  // Lifecycle
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Action handlers
  function handleChangeTodoStatus({ id, done }) {
    setTodos((prevState) => prevState.map((todo) => (
      todo.id === id ? { ...todo, done } : todo
    )));
  }

  function handleRemoveTodo(id) {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTodoText) {
      return;
    }

    const newTodo = {
      id: Math.random(),
      description: newTodoText,
      done: false,
    };

    setTodos((prevState) => [newTodo, ...prevState]);
    setNewTodoText('');
  }

  // UI
  return (
    <main className={styles.appContainer}>
      <img src={theme === 'dark' ? logoLight : logo} className={styles.logo} />

      <form className={styles.createTask} onSubmit={handleSubmit} data-theme={theme}>
        <input
          type="text"
          placeholder="Hit enter to add a new task..."
          value={newTodoText}
          onChange={e => setNewTodoText(e.target.value)}
        />
      </form>

      <TodoList
        todos={todos}
        onChangeTodoStatus={handleChangeTodoStatus}
        onRemoveTodo={handleRemoveTodo}
      />

      <ThemeSwitcher />
    </main>
  );
}
