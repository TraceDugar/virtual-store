import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// Top level of the entire App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Access for Redux Toolkit into the App */}
    <Provider store={store}>

      {/* The App itself */}
      <App />
    </Provider>
  </React.StrictMode>
);

