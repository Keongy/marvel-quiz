import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index.js';
import FirebaseContext from './components/Firebase/context.js';
import Firebase from './components/Firebase/firebase.js';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
