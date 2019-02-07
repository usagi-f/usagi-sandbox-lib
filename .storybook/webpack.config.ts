import * as webpack from 'webpack';
import { ColorsWithHash, Spacing } from '../src/variables';

const config = (config: webpack.Configuration) => {
  if (config.module && config.module.rules) {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]],
            },
          },
          require.resolve('react-docgen-typescript-loader'),
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-css-variables')({
                  variables: Object.assign(ColorsWithHash, Spacing),
                }),
              ],
            },
          },
        ],
      },
    );
  }
  if (config.resolve && config.resolve.extensions) {
    config.resolve.extensions.push('.ts', '.tsx');
  }
  return config;
};

export default config;
