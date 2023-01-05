const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: resolve(__dirname, 'index.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|webp|gif|git|svg|)$/i,
                use: [
                    {
                        loader: `img-optimize-loader`,
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(mp3|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
    ],
    devServer: {
        port: 3001
    }
}