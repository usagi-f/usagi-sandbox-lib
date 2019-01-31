import React from 'react';
import { storiesOf } from '@storybook/react';

import { Welcome } from '@storybook/react/demo';
import { Button } from 'usagi-sandbox-lib';

import 'usagi-sandbox-lib/dist/css/all.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('Button', module)
  .add('with children text', () => <Button>Hello Button</Button>)
  .add('with props text', () => <Button text="Custom Props Text" />)
  .add('fallback text', () => <Button />);
