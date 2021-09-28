import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    babel({
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**',
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            removeImport: true
          }
        ]
      ]
    }),
    terser()
  ],
  external: ['react']
}
