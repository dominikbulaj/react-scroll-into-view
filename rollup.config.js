import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    commonjs({
      include: 'node_modules/**'
    }),
    resolve(),
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
    uglify()
  ],
  external: ['react']
};
