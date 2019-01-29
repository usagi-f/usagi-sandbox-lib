import * as React from 'react'
import * as style from './style.css'
import { ThemeConsumer } from '../../context'

interface IButtonProps extends React.Props<{}> {
  text?: string;
}

const Button: React.FC<IButtonProps> = props => (
  <ThemeConsumer>
    {({ theme }) => (
      <button
        type="button"
        data-theme={theme}
        className={style.button}
      >
        {props.children || props.text}
      </button>
    )}
  </ThemeConsumer>
)

Button.defaultProps = {
  text: 'MyButton',
}

export {
  Button,
  IButtonProps,
}
