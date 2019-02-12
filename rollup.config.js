import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import postCssVariables from 'postcss-css-variables';

import pkg from './package.json';
import { colorsWithHash, spacing } from './src/variables/index.ts';

export default {
  input: './src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
  },
  external: [...Object.keys(pkg.dependencies)],
  plugins: [
    nodeResolve(),
    postcss({
      extract: pkg.mainCss,
      modules: true,
      namedExports: true,
      plugins: [
        postCssVariables({
          variables: Object.assign(ColorsWithHash, Spacing),
        }),
      ],
    }),
    typescript({
      objectHashIgnoreUnknownHack: true,
    }),
    babel(),
  ],
};
