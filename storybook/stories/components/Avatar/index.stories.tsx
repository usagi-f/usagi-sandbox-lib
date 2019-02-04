import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar as AvatarComponent, IAvatarProps } from 'usagi-sandbox-lib';
import 'usagi-sandbox-lib/dist/css/all.css';

export const Avatar: React.FC<IAvatarProps> = props => <AvatarComponent {...props} />;

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
