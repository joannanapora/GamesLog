import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./components/ThemeProvider";

ReactDOM.render(
    <BrowserRouter>
    <ThemeProvider>
    <App />
  </ThemeProvider>,
    </BrowserRouter>,
  document.getElementById('root')
);
