const path = require('../node_modules/path');
const webpack = require('../node_modules/webpack');
const dashboardPlugin   = require('webpack-dashboard/plugin');

const options = {
    host:'localhost',
    port:'1234'
};

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,'./src/main.js'),
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only',
        host: options.host,
        port: options.port
    },
    // resolve: {
    //     alias: {
    //         $: "jquery/src/jquery",
    //     }
    // },
    module: {
        rules: [{
            test: /\.js$/,

            include: [path.resolve(__dirname, "./src")],
            exclude: /(node_modules\|\.\/*\.js$)/,

            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    plugins: [
        new dashboardPlugin()

    ]
};