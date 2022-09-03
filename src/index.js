import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import LangProvider from './LangContext';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LangProvider>
  </React.StrictMode>
);
