import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FBApiKey,
  authDomain: process.env.REACT_APP_FBAuthDomain,
  databaseURL: process.env.REACT_APP_FBDatabaseURL,
  projectId: process.env.REACT_APP_FBProjectID,
  storageBucket: process.env.REACT_APP_FBStorageBucket,
  messagingSenderId: process.env.REACT_APP_FBMessageSenderID,
  appId: process.env.REACT_APP_FBAppID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  ReactDOM.render(
    <Router>
      <App />
    </Router>
    , document.getElementById('root'))

