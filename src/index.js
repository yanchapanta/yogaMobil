import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './pages/sass/_values.scss';
import './pages/sass/general.scss';
import './pages/sass/_mixins.scss';
import './pages/sass/utilities.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


