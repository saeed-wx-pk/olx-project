import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {firebaseContext} from './store/contexts'
import Context from './store/contexts'
import firebase from './firebase/config'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
      <Context>
        <App />
      </Context>
    

  </React.StrictMode>
);


