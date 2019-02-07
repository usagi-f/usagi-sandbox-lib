import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../context';
import { Button } from './';

storiesOf('Button', module)
  .add('Simple render', () => <Button />)
  .add('with children', () => <Button>Hello Button</Button>)
  .add('with text', () => <Button text="Custom Props Text" />)
  .addDecorator(getStory => <ThemeProvider value={{ theme: 'dark' }}>{getStory()}</ThemeProvider>)
  .add('Dark theme', () => <Button />);
