const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => ({
  entry: {
    main: './src/main.js',
    secondary: './src/secondary.js'
  },
  output: {
    path: path.resolve(path.join(__dirname, 'dist')),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks(chunk) {
            return ['main'].includes(chunk.name);
          }
        }
      }
    },
    minimize: false
  },
  plugins: [
      new HtmlWebpackPlugin(),
      new CleanWebpackPlugin()
    ]
});
