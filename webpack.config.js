var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(__dirname, 'src/'),
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/'),
          path.resolve(__dirname, 'node_modules/')
        ],
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: [
          path.resolve(__dirname, 'src/'),
          path.resolve(__dirname, 'node_modules/')
        ],
        loader: "file-loader"
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/'),
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
