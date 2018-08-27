const path = require('path');
const webpack = require('webpack');
const config = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index.jsx'),
        // path.resolve(__dirname, 'src/decorator.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env"],
                        plugins: [
                            'transform-class-properties',
                            'transform-decorators-legacy'
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
};

module.exports = config;