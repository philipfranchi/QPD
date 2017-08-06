const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/client/');

module.exports = {
  devtool: 'sourcemap',
  entry: APP_DIR + '/index.jsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'InfiniScroll',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: BUILD_DIR
  },
   module: {
      rules: [

        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
		    {
          test: /\.jsx?$/,
          use: [
            'babel-loader'
          ]
        },

      ]
    }
  }

