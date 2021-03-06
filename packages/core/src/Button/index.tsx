import * as React from 'react';
import { Button, IButtonProps } from './Button';
import { ThemeConsumer } from '@usagi-f/usagi-sandbox-lib-context';

const ButtonWithConsumer: React.FC<IButtonProps> = props => (
  <ThemeConsumer>{({ theme }) => <Button theme={theme} {...props} />}</ThemeConsumer>
);

export { ButtonWithConsumer as Button, IButtonProps };
