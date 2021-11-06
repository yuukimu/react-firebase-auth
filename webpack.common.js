const path = require('path');
const Dotenv = require('dotenv-webpack');
const enviroment = process.env.NODE_ENV || 'dev';

const common = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist', 'scripts')
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                use: ['ts-loader'],
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, `.env.${enviroment}`),
        }),
    ],
};

module.exports = common;
