const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './frontend/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/bundle.js',

  },
  module : {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },

      { test: /\.(jpg|png)$/,
        use:[
          { 
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'icons/',
                publicPath: 'icons/'
            }
          }
        ] 
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    })
  ],
  devtool: 'source-map'
};