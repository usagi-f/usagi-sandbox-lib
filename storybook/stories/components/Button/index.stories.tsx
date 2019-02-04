import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button as ButtonComponent, IButtonProps } from 'usagi-sandbox-lib';
import 'usagi-sandbox-lib/dist/css/all.css';

export const Button: React.FC<IButtonProps> = props => <ButtonComponent {...props} />;

storiesOf('Button', module)
  .add('Simple render', () => <Button />)
  .add('with children', () => <Button>Hello Button</Button>)
  .add('with text', () => <Button text="Custom Props Text" />);
