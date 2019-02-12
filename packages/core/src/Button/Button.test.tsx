import * as React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Button, IButtonProps } from './Button';

test('Rendered by props', () => {
  const props: IButtonProps = {
    text: 'foo',
  };
  const wrapper = shallow(<Button {...props} />);
  expect(wrapper.text()).toBe(props.text);
});

test('Snapshot', () => {
  const props: IButtonProps = {
    text: 'foo',
  };
  const tree = shallow(<Button {...props} />);
  expect(toJson(tree)).toMatchSnapshot();
});
