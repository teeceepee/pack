var path = require('path');

module.exports = {
  entry: './app/entry.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  }
};

