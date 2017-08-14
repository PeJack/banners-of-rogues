const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './js'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './js'),
        filename: '[name].bundle.js',
        library: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }],
            },
            {
                test: [/\.fs$/, /\.vs$/],
                use: 'raw-loader'
            }
        ],
    },
    resolve: {
        modules: [
          path.resolve(__dirname, './js'),
          path.resolve(__dirname, 'node_modules')
        ]
    }
};