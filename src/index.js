import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssVarsProvider } from '@mui/joy/styles'; // Import CssVarsProvider

ReactDOM.render(
  <React.StrictMode>
    <CssVarsProvider> {/* Wrap your app with CssVarsProvider */}
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);