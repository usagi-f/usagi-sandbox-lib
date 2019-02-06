import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(
  withInfo({
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
  }),
);
configure(loadStories, module);
