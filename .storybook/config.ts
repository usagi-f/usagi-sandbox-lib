import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

let req: __WebpackModuleApi.RequireContext;

if (process.env.NODE_ENV === 'test') {
  req = require('require-context')('../../src/components', true, /.stories.tsx$/);
} else {
  req = require.context('../src/components', true, /.stories.tsx$/);
}

function loadStories() {
  req.keys().forEach((filename: any) => req(filename));
}

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
