import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es'
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named'
    }
  ],
  plugins: [
    typescript(),
    nodeResolve(),
    babel({
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**',
      plugins: [],
      babelHelpers: 'runtime'
    }),
    terser(),
    filesize()
  ],
  external: ['react']
}
