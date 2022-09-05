import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminHome from './components/AdminHome/AdminHome';
import 'antd/dist/antd.min.css';
import './style.scss';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <AdminHome/>
  </Provider>
)
