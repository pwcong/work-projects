const path = require('path');
const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/app.js',
        vendor: ['babel-polyfill', 'vue', 'vuex', 'vue-router', 'axios']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env',
                        'stage-1'
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [require('postcss-cssnext')],
                    extractCSS: true,
                    esModule: true
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'imgs/[name].[ext]?[hash]',
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        port: 3000,
        contentBase: [
            './'
        ],
        inline: true,
        publicPath: '/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Scratch',
            template: 'index.ejs',
            minify: {
                collapseWhitespace: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.js'
        })
    ]
}

if (process.env.NODE_ENV === 'production') {

    module.exports.devtool = 'source-map';

    module.exports.plugins = (module.exports.plugins || []).concat([

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}