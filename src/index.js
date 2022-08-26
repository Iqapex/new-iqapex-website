import React from 'react';
import ReactDOM from 'react-dom/client';
import "swiper/css/bundle";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import MouseContextProvider from './context/mouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <Router>
        <App />
      </Router>
    </MouseContextProvider>
  </React.StrictMode>
);

