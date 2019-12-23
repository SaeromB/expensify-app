const path = require('path');

module.exports = {
  entry: './src/playground/redux-101.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      // this will support both scss files and css files
      test: /\.s?css$/,
      // get the code and change it scss to css 
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // this will tell our dev server that we will handle route in the client server
    historyApiFallback: true
  }
};

