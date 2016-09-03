var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: {
    bundle: './app/entry.js',
    tags: './app/tags.js',
    'search-form': './app/search-form.js',
    ground: './app/ground.js',
    mask: './app/mask.js',
    'vue-resource': './app/vue-resource.js',
    'react-app': './app/react-app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    publicPath: '/assets/',
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
        loader: 'file-loader?name=[name]-[hash].[ext]'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader?name=[path][name]-[hash].[ext]'
      }
    ]
  },

  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, 'public', 'assets'),
      prettyPrint: true
    })
  ],

  sassLoader: {
    outputStyle: 'nested'
  }
};
