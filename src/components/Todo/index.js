import React, { useContext } from 'react';

import { Context } from '../../contexts/ThemeContext';

import styles from './styles.scss';
import deleteIcon from '../../images/icons/delete.svg';
import deleteIconWhite from '../../images/icons/delete-white.svg';

export default function Todo({ todo, onChangeTodoStatus, onRemoveTodo }) {
  const { theme } = useContext(Context);

  return (
    <div className={styles.todo} data-theme={theme}>
      <label style={{ opacity: todo.done ? '0.3' : 1 }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => onChangeTodoStatus({ id: todo.id, done: e.target.checked })}
        />
        {todo.done ? <em>{todo.description}</em> : todo.description}
      </label>

      <div className={styles.actions}>
        <button type="button" onClick={() => onRemoveTodo(todo.id)}>
          <img src={theme === 'dark' ? deleteIconWhite : deleteIcon} />
        </button>
      </div>
    </div>
  );
}
