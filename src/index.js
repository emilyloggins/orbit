import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase'
import { FBApiKey, FBAuthDomain, FBDatabaseURL, FBProjectID, FBStorageBucket, FBMessageSenderID, FBAppID } from './config'
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: FBApiKey,
  authDomain: FBAuthDomain,
  databaseURL: FBDatabaseURL,
  projectId: FBProjectID,
  storageBucket: FBStorageBucket,
  messagingSenderId: FBMessageSenderID,
  appId: FBAppID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  ReactDOM.render(
    <Router>
      <App />
    </Router>
    , document.getElementById('root'))

