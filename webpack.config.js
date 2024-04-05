const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, './src/javascript') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Mi juego de aviones',
    filename: 'index.html',
    hash: true,
  }),
  new CopyPlugin({
    patterns: [
      { from: "./src/html/*.html", to: path.resolve(__dirname, 'dist') },      
    ],
  }),]
};