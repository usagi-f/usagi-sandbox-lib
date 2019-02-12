import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import postcssCssVariables from 'postcss-css-variables';

import pkg from './package.json';
import { colorsWithHash, spacing } from '@usagi-f/usagi-sandbox-lib-variables';

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
        postcssCssVariables({
          variables: Object.assign(colorsWithHash, spacing),
        }),
      ],
    }),
    typescript({
      objectHashIgnoreUnknownHack: true,
    }),
    babel(),
  ],
};
