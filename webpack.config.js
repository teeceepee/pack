var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var BabiliPlugin = require('babili-webpack-plugin');


module.exports = {
  entry: {
    bundle: './app/entry.js',
    'vue-app': './app/vue-app.js',
    tags: './app/tags.js',
    'search-form': './app/search-form.js',
    ground: './app/ground.js',
    mask: './app/mask.js',
    'vue-resource': './app/vue-resource.js',
    'react-app': './app/react-app.jsx',
    //todo: './app/todo.jsx',
    todo: './app/todo/index.js',
    'select2-demo': './app/select2-demo.js',
    'bilibili': './app/bilibili.js',
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader : 'babel'
      },
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
    new BabiliPlugin({
      evaluate: false,
      deadcode: false,
      infinity: false,
      mangle: false,
      numericLiterals: false,
      replace: false,
      simplify: false,
      builtIns: false,
      mergeVars: false,
      booleans: false,
      regexpConstructors: false,
      removeConsole: false,
      removeDebugger: false,
      removeUndefined: false,
      undefinedToVoid: false,

      unsafe: false,
      properties: false,
    }),
    new AssetsPlugin({
      path: path.resolve(__dirname, 'public', 'assets'),
      prettyPrint: true
    }),
  ],

  sassLoader: {
    outputStyle: 'nested'
  }
};
