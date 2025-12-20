import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { loadData } from './lib/data';
import './styles/globals.css';
import './styles/tailwind.css';
import 'tippy.js/dist/tippy.css';

// Preload data to start loading immediately
void loadData();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
