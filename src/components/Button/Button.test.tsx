import * as React from 'react'
import { shallow } from 'enzyme'
import { Button, IButtonProps } from './Button'

test('Rendered by props', () => {
  const props: IButtonProps = {
    text: 'foo',
  }
  const wrapper = shallow(<Button {...props} />);
  expect(wrapper.text()).toBe(props.text);
});
