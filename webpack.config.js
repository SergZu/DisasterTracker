const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: { 
        path: path.join(__dirname, "build"), filename: "index.bundle.js" 
    },
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    resolve: { 
                modules: [path.resolve(__dirname, "src"), "node_modules"],
                extensions: ['.tsx', '.ts', '.js']
            },
    devServer: { 
        static: path.join(__dirname, "src") 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};