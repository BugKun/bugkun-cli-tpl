﻿const webpack = require('webpack'),
    path = require('path'),
    webpackBaseConfig = require('./webpack.base.config.js');


module.exports = {
    mode: "development",
    entry: {
        ...webpackBaseConfig.entry,
        app: [
            ...webpackBaseConfig.entry.app, 
            "webpack-hot-middleware/client?reload=true"
        ]
    },
    output: {
        ...webpackBaseConfig.output,
        filename: '[name].[hash:8].js'
    },
    resolve: {
        ...webpackBaseConfig.resolve,
        alias: {
            ...webpackBaseConfig.resolve.alias,
            Config: path.resolve(__dirname, "../config/dev")
        }
    },
    devtool: "source-map",
    module: webpackBaseConfig.module,
    optimization: webpackBaseConfig.optimization,
    plugins: [
        ...webpackBaseConfig.plugins,
        new webpack.HotModuleReplacementPlugin()
    ]
};