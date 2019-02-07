import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../src/components', true, /.stories.tsx$/);
const loadStories = () => req.keys().forEach(req);

const option: {
  styles?: any;
  inline?: boolean;
  header?: boolean;
} = {
  styles: {
    infoBody: {
      lineHeight: '1.8em',
      padding: 20,
      marginTop: 50,
      borderWidth: '1px 0 0 0',
    },
  },
  inline: true,
  header: false,
};

addDecorator(withInfo(option));
configure(loadStories, module);
