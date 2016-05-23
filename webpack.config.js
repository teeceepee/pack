var path = require('path');

module.exports = {
  entry: {
    bundle: './app/entry.js',
    tags: './app/tags.js',
    'search-form': './app/search-form.js',
    ground: './app/ground.js'
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
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  sassLoader: {
    outputStyle: 'nested'
  }
};

