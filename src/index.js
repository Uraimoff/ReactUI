import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PlayerProvider from './components/Component/contexts/PlayerContext';
import ThemeProvider from './components/Component/contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerProvider>
      <ThemeProvider>
    <App />
      </ThemeProvider>
    </PlayerProvider>
    </BrowserRouter>
  </React.StrictMode>
);

