import * as React from 'react'
import * as style from './style.css'
import { Context } from '../../context'

interface IButtonProps extends React.Props<{}> {
  text?: string;
}

const Button: React.FC<IButtonProps & Partial<Context>> = props => (
  <button
    type="button"
    data-theme={props.theme}
    className={style.button}
  >
    {props.children || props.text}
  </button>
)

Button.defaultProps = {
  text: 'MyButton',
}

export {
  Button,
  IButtonProps,
}
