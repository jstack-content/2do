import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';

import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
