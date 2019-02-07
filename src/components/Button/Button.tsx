import * as React from 'react';
import * as styleLight from './style.css';
import * as styleDark from './style_dark.css';
import { Context } from '../../context';

interface IButtonProps extends React.Props<{}> {
  text?: string;
}

const Button: React.FC<IButtonProps & Partial<Context>> = props => {
  const style = props.theme === 'dark' ? styleDark : styleLight;
  return (
    <button type="button" className={style.button}>
      {props.children || props.text}
    </button>
  );
};

Button.defaultProps = {
  text: 'MyButton',
};

export { Button, IButtonProps };
