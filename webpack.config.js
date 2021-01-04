const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: './frontend/js/confirm.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/index.js'
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
        })
    ]
};