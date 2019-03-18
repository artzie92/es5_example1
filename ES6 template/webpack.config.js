const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');


//configuration of html webpack plugin
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('dist'),
        filename: 'bundled.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [htmlPlugin]
};
