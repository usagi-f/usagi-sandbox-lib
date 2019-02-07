import * as React from 'react';
import { Button as ButtonSource, IButtonProps } from './Button';
import { ThemeConsumer, Context } from '../../context';

const Button: React.FC<IButtonProps> = props => (
  <ThemeConsumer>{({ theme }: Context) => <ButtonSource theme={theme} {...props} />}</ThemeConsumer>
);

export { Button, IButtonProps };
