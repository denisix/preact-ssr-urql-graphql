import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import styles from 'rollup-plugin-styles'
import { babel } from '@rollup/plugin-babel'

export default [
  {
    input: 'src/server.js',
    output: {
      file: 'dist/server.js',
      format: 'cjs',
      watch: 'src/**/**/*'
    },
    plugins: [resolve({ preferBuiltins: true }), json(), styles(), babel({ babelHelpers: 'bundled', plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }]] })],
  }
]