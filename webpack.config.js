var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        MOVIEPREREVIEW: ['@babel/polyfill', '../MOVIE_PREREVIEW/client/src/index.jsx'],
        PHOTOCAROUSEL: '../PHOTO_CAROUSEL/client/index.jsx',
        CASTPHOTO: '../castphotos/client/index.jsx',
        CRITICREVIEWS: '../CRITIC_REVIEWS/client/index.jsx',
        AUDIENCEREVIEWS: '../AUDIENCE_REVIEWS/client/src/index.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/public',
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin()
    ],
}