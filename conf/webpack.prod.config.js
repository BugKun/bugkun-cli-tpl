﻿const path = require('path'),
    webpackBaseConfig = require('./webpack.base.config'),
    CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: "production",
    entry: webpackBaseConfig.entry,
    output: webpackBaseConfig.output,
    resolve: {
        ...webpackBaseConfig.resolve,
        alias: {
            ...webpackBaseConfig.resolve.alias,
            Config: path.resolve(__dirname, "../config/prod")
        }
    },
    module: webpackBaseConfig.module,
    optimization: webpackBaseConfig.optimization,
    plugins: [
        ...webpackBaseConfig.plugins,
        new CleanWebpackPlugin(
            ["build", "assets", "index.html"],
            {
                root: path.resolve(__dirname, '../static/'),
                verbose: true,
                dry: false
            }
        )
    ]
};
