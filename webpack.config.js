const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        historyApiFallback: true,

        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },

        headers: {
            'Access-Control-Allow-Origin': '*['
        },
        proxy: [
            {
                '/api/**': {
                    target: 'http://localhost:3000',
                    secure: false,
                },
            },
        ],
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};