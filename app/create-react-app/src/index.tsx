import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider, Context } from 'usagi-sandbox-lib';
import 'usagi-sandbox-lib/dist/css/all.css';

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
