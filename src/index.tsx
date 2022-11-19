import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProgressBarList from './ProgressBarList/ProgressBarList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProgressBarList />
  </React.StrictMode>
);
