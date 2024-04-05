const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/javascript') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './src/html/assets/index.html',
      filename: 'index.html',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        subjetc: 'My Awesome application is a great app!',
        description: 'My Awesome application is a great app!',
        
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          context: './src/html/',
          from: '**/*.html',
          to: path.resolve(__dirname, 'dist'),
          force: true,
          globOptions: {
            ignore: [
              // Ignore all `txt` files
              "**/*.txt",
              // Ignore all files in all subdirectories
              "**/assets/**",
            ],
          },
        }
      ]
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};