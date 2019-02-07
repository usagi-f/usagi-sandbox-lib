import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from './Avatar';

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
