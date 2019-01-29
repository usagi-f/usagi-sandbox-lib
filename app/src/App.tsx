import * as React from 'react';

import { Button, IButtonProps } from './dist'

const buttonProps: IButtonProps = {
  text: 'Hello Dog!',
}

class App extends React.Component {
  render() {
    return (
      <>
        <Button />
        <Button>Hello World!</Button>
        <Button {...buttonProps}></Button>
      </>
    );
  }
}

export default App;
