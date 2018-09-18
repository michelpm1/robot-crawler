import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from './router/router';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(<Router>

    <ReactRouter/>
  </Router>
  ,
  document.getElementById('root'));

