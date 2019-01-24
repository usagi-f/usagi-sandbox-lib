import * as React from 'react'

interface IButtonProps extends React.Props<{}> {
  text?: string;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => (
  <button type="button">{props.children || props.text}</button>
)

Button.defaultProps = {
  text: 'MyButton',
}

export {
  Button,
  IButtonProps
}
