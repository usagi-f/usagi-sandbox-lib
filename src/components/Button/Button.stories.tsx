import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('Simple render', () => <Button />)
  .add('with children', () => <Button>Hello Button</Button>)
  .add('with text', () => <Button text="Custom Props Text" />);
