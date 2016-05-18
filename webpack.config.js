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
      {test: /\.css$/, loader: "style!css"}
    ]
  }
};

