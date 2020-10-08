import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './util/styled/theme';
import Global from './util/styled/Global';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


