const webpack = require('webpack');
const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: {
        app: './src/main.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },    
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              loader: 'awesome-typescript-loader'
            },
            {
              test: /\.css$/,
              loaders: 'style-loader!css-loader'
            }
        ],
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}