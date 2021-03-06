const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        echarts: "./src/echarts.js"
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true, // 启用 gzip
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(css|sass)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/views/index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: "echarts.html",
            template: "./src/views/echarts.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
    ]
};