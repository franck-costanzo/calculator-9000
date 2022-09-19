import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TheTitle from './Components/TheTitle/TheTitle';
import Calculator from './Components/Calculator/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TheTitle/>
    <Calculator/>    
  </React.StrictMode>
);