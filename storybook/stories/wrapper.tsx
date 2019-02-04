import * as React from 'react';
import { Button as ButtonComponent, Avatar as AvatarComponent, IButtonProps, IAvatarProps } from 'usagi-sandbox-lib';

// Attach Interface
export const Button: React.FC<IButtonProps> = props => <ButtonComponent {...props} />;
export const Avatar: React.FC<IAvatarProps> = props => <AvatarComponent {...props} />;
