var path = require('path');

module.exports = {
  entry: './index.es6',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    loaders: [{
      test: /\.es6$/,
      loader: 'babel',
      exclude: path.resolve('node_modules'),
      query: {
        presets: ['es2015']
      }
    }]
  }
};
