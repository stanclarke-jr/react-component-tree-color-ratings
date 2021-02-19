/* eslint-disable import/prefer-default-export */
import React from 'react';
import { render } from 'react-dom';
import ColorProvider from './hooks/colorHooks';
import App from './components/App';
import './styles/style.css';

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);
