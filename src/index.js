import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { firebaseConfig } from './config';


firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();