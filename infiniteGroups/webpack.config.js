var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
  	rules: [
    	{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
  		]
	}

};

module.exports = config;
