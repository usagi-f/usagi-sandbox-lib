import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import postCssVariables from 'postcss-css-variables'

import pkg from './package.json'
import { ColorsWithHash, Spacing } from './src/variables/index.ts'

export default {
  input: './src/index.ts',
  output: {
    file: pkg.main,
    format: 'esm',
    exports: 'named',
  },
  external: [
    ...Object.keys(pkg.dependencies),
  ],
  plugins: [
    nodeResolve(),
    postcss({
      extract: pkg.mainCss,
      modules: true,
      namedExports: true,
      plugins: [
        postCssVariables({
          variables: Object.assign(ColorsWithHash, Spacing)
        })
      ]
    }),
    typescript({
      objectHashIgnoreUnknownHack: true,
    }),
    babel({
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
      ],
      exclude: 'node_modules/**',
      extensions: ['ts', 'tsx'],
    }),
  ]
};
