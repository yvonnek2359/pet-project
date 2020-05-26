import React from 'react';
<<<<<<< HEAD
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
render(
=======
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
>>>>>>> ecdbf9a8e4a60be42bf57f3d5631f1e8201e5b28
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

<<<<<<< HEAD
=======
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
>>>>>>> ecdbf9a8e4a60be42bf57f3d5631f1e8201e5b28
serviceWorker.unregister();
