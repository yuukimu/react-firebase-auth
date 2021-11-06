const { merge } = require('webpack-merge');
const common = require("./webpack.common");

const develop = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist",
        port: "8081",
        host: '0.0.0.0'
    }
});

module.exports = develop;
