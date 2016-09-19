var webpack = require('webpack');

module.exports = {
    // entry: './js/entry.js',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:4001', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './src/index.js' // Your appʼs entry point
    ],
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            // LESS
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },

            // SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};