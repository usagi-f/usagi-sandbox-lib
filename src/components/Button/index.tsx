import * as React from 'react'
import * as style from './style.css'

interface IButtonProps extends React.Props<{}> {
  text?: string;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => (
  <button type="button" className={style.button}>{props.children || props.text}</button>
)

Button.defaultProps = {
  text: 'MyButton',
}

export {
  Button,
  IButtonProps,
}
