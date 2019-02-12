import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider, Context } from '@usagi-f/usagi-sandbox-lib-context';
import '@usagi-f/usagi-sandbox-lib-core/css/index.css';

const context: Context = {
  theme: 'dark',
};

ReactDOM.render(
  <ThemeProvider value={context}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
