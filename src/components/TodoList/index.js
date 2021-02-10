import React, { useContext } from 'react';

import Todo from '../Todo';
import { Context } from '../../contexts/ThemeContext';

import styles from './styles.scss';

export default function TodoList(props) {
  const { theme } = useContext(Context);

  return (
    <section className={styles.todoList} data-theme={theme}>
      <h1>My tasks</h1>

      <div className={styles.tasks} data-theme={theme}>
        {props.todos.length < 1 && (
          <h2>You don't have any tasks yet =(</h2>
        )}
        
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onChangeTodoStatus={props.onChangeTodoStatus}
            onRemoveTodo={props.onRemoveTodo}
          />
        ))}
      </div>
    </section>
  );
}
