import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';              // Provider importu
import './index.css';
import App from './App.jsx';
import { store } from './redux/store';               // store yolunu projene göre kontrol et

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <App />
    </Provider>
  
);
