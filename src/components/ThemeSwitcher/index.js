import React, { useContext } from 'react';

import { Context } from '../../contexts/ThemeContext';

import styles from './styles.scss';

export default function ThemeSwithcer() {
  const context = useContext(Context);
  
  return (
    <button type="button" className={styles.button} onClick={context.toggleTheme}>
      {context.theme === 'light' ? 'Switch to Dark Mode 🌚' : 'Switch to Light Mode 🌞'}
    </button>
  );
}