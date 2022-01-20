import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './components/App/index.js';
import FirebaseContext from './components/Firebase/context.js';
import Firebase from './components/Firebase/firebase.js';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
