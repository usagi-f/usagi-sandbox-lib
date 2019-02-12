import * as React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Avatar, IAvatarProps } from './Avatar';

test('Rendered by props', () => {
  const props: IAvatarProps = {
    alt: 'foo',
    size: 10,
  };
  const wrapper = shallow(<Avatar {...props} />);
  expect(wrapper.find('img').prop('alt')).toBe(props.alt);
  expect(wrapper.find('img').prop('width')).toBe(props.size);
});

test('Snapshot', () => {
  const props: IAvatarProps = {
    alt: 'foo',
    size: 10,
  };
  const tree = shallow(<Avatar {...props} />);
  expect(toJson(tree)).toMatchSnapshot();
});
