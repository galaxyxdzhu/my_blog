const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        compress: false,
        port: 8081,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: ['vue-style-loader','css-loader','sass-loader']
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
          
    ]
}