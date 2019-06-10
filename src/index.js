import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
