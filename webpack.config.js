var path = require('path');

module.exports = {
  entry: './app/entry.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"}
    ]
  }
};

