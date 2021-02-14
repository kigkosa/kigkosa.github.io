const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = "development";

module.exports = {
  mode,  
  output: {
    path: path.resolve(__dirname, 'assets'),
  },
  entry: {
    'main':'./src/index.js',
    // Will create "styles.css" in "css" dir.
    "styles": './src/style.scss',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, importLoaders: 1 } },
          // Add browser prefixes and minify CSS.
          { loader: 'postcss-loader'},
          // Load the SCSS/SASS
          { loader: 'sass-loader' }
        ],
      },
    ],
  },
};
