import * as React from 'react'
import * as style from './style.css'

interface IAvatarProps extends React.Props<{}> {
  alt?: string;
  size?: number;
}

const Avatar: React.FC<IAvatarProps> = (props: IAvatarProps) => (
  <div className={style.avatar}>
    <img src={`https://via.placeholder.com/${props.size}`} alt={props.alt} width={props.size} />
  </div>
)

Avatar.defaultProps = {
  alt: '',
  size: 32,
}

export {
  Avatar,
  IAvatarProps,
}
