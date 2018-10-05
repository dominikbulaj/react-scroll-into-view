import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  plugins: [
    commonjs({
      include: "node_modules/**"
    }),
    resolve(),
    babel({
      babelrc: false,
      presets: ["es2015-rollup"],
      exclude: "node_modules/**",
      plugins: ["transform-react-jsx", "transform-object-rest-spread"]
    }),

    uglify()
  ],
  external: ["react"]
};
