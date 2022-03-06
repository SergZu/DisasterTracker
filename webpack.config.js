const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
	path: path.join(__dirname, '.env')
  } );
const definePluginConfig = new webpack.DefinePlugin({
    "process.env": dotenv.parsed
  });

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
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            exclude: /node_modules/,
            type: 'asset/resource',
        },

        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            exclude: /node_modules/,
            type: 'asset/inline',
        },

        {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'], 
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
        definePluginConfig,
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        })
    ],
};