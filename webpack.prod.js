const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const production = merge(common, {
    mode: 'production',
});

module.exports = production;
