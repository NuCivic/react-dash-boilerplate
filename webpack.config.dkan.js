/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var MODE = process.env.MODE;
var plugins = [new ExtractTextPlugin('bundle.min.css')];
var devtool = (MODE === 'production') ? 'source-map' : 'eval';

if(MODE === 'production') {
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {comments: false},
      mangle: true
    })
  ]);
}

module.exports = {
  devtool: devtool,
  entry: './src/dkan',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader') },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')  }
    ]
  }
};
