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
                        presets: ["env", "react"],
                        plugins: [
                            // Wrong order causes mbox stop working
                            'transform-decorators-legacy',
                            'transform-class-properties',
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