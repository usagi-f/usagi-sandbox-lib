import * as React from 'react'

type Context = {
  theme: 'light' | 'dark',
}

const defaultContext: Context = {
  theme: 'light',
}

const { Provider, Consumer } = React.createContext(defaultContext);

export {
  Context,
  Provider as ThemeProvider,
  Consumer as ThemeConsumer,
}
