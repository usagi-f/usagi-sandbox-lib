import * as React from 'react';

type Context = {
  theme: 'light' | 'dark';
};

const defaultContext: Context = {
  theme: 'light',
};

const { Provider, Consumer } = React.createContext(defaultContext);

// Set displayName property
const ThemeProvider: React.FC<React.ProviderProps<Context>> = props => <Provider {...props} />;
const ThemeConsumer: React.FC<React.ConsumerProps<Context>> = props => <Consumer {...props} />;

export { Context, ThemeProvider, ThemeConsumer };
