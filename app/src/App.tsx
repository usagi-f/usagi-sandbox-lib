import * as React from 'react';

import { Button, IButtonProps, Colors } from './dist'

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
        <table>
          <tr>
            <th>400</th>
            <th>300</th>
            <th>200</th>
            <th>100</th>
            <th>50</th>
          </tr>
          <tr>
            <td>
              <img src={`https://via.placeholder.com/100/${Colors.red400}/FFF`} alt="" />
            </td>
            <td>
              <img src={`https://via.placeholder.com/100/${Colors.red300}/FFF`} alt="" />
            </td>
            <td>
              <img src={`https://via.placeholder.com/100/${Colors.red200}/FFF`} alt="" />
            </td>
            <td>
              <img src={`https://via.placeholder.com/100/${Colors.red100}/FFF`} alt="" />
            </td>
            <td>
              <img src={`https://via.placeholder.com/100/${Colors.red50}/FFF`} alt="" />
            </td>
          </tr>
        </table>
      </>
    );
  }
}

export default App;
