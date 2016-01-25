var webpack = require('webpack')

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.tag$/,
            loader: 'tag',
            query: {
                compact: 'true'
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style!css",
            exclude: /node_modules/
        }]
    },
    externals: {
        "riot": "riot"
    }
}
