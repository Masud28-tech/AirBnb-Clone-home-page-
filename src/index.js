import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import AppThemeProvider from './themes/AppThemeProvider';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);


