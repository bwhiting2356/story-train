import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as app from "firebase";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export class FirebaseContainer {
  firestore: firebase.firestore.Firestore

  constructor() {
    app.initializeApp(config);

    this.firestore = app.firestore();
  }
}
const firebaseContainer = new FirebaseContainer();
export const FirebaseContext = React.createContext<FirebaseContainer>(firebaseContainer);

ReactDOM.render(
  <FirebaseContext.Provider value={firebaseContainer}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
