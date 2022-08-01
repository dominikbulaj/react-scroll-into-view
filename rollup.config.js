import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'es'
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'default'
    }
  ],
  plugins: [
    typescript({
      compilerOptions: { declaration: true, declarationDir: './types' }
    }),
    nodeResolve(),
    babel({
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**',
      plugins: [],
      babelHelpers: 'runtime'
    }),
    terser()
  ],
  external: ['react']
}
