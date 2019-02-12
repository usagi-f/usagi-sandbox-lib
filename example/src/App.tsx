import * as React from 'react';

import { Button, IButtonProps, colors } from 'usagi-sandbox-lib';

const buttonProps: IButtonProps = {
  text: 'Hello Dog!',
};

class App extends React.Component {
  render() {
    return (
      <>
        <Button />
        <Button>Hello World!</Button>
        <Button {...buttonProps} />
        <table>
          <thead>
            <tr>
              <th>400</th>
              <th>300</th>
              <th>200</th>
              <th>100</th>
              <th>50</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={`https://via.placeholder.com/100/${colors.red400}/FFF`} alt="" />
              </td>
              <td>
                <img src={`https://via.placeholder.com/100/${colors.red300}/FFF`} alt="" />
              </td>
              <td>
                <img src={`https://via.placeholder.com/100/${colors.red200}/FFF`} alt="" />
              </td>
              <td>
                <img src={`https://via.placeholder.com/100/${colors.red100}/FFF`} alt="" />
              </td>
              <td>
                <img src={`https://via.placeholder.com/100/${colors.red50}/FFF`} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
