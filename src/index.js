import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js'

ReactDOM.render(
  //error가 console 창에 표시 (배포시 활성화 X)
  <React.StrictMode>  
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);
