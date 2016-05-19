var path = require('path');

module.exports = {
  entry: {
    bundle: './app/entry.js',
    tags: './app/tags.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  sassLoader: {
    outputStyle: 'nested'
  }
};

