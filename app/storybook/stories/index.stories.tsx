import * as React from 'react';
import { storiesOf } from '@storybook/react';
import 'usagi-sandbox-lib/dist/css/all.css';

import { Button, Avatar } from './wrapper';

storiesOf('Button', module)
  .add('Simple render', () => <Button />)
  .add('with children', () => <Button>Hello Button</Button>)
  .add('with text', () => <Button text="Custom Props Text" />);

storiesOf('Avatar', module)
  .add('Simple render', () => <Avatar />)
  .add('with alt', () => <Avatar alt="Custom Alt" />)
  .add('with size', () => (
    <div>
      <Avatar size={12} />
      <Avatar size={24} />
      <Avatar size={48} />
      <Avatar size={64} />
    </div>
  ));
