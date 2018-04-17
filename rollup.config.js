import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports:{
        './node_modules/react/index.js': ['createFactory', 'Component','createElement'],
      }
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}