"use strict";

const webpack = require('webpack');

const PATHS = require('./webpack-paths');

/*
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
   disable: process.env.NODE_ENV === "development" 
});
*/

exports.devServer = function(options) {
	return {
		devServer:{
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: options.host,
			port: 8888, /*options.port,*/
			contentBase: './client/dist',
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin({
				multistep: true
			})
		]
	}
}

exports.css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  include: PATHS.css
}


exports.scss = {
	// .ms[ac]
	test: /\.scss$/,
	use: [{
		// creates style nodes from JS strings
    	loader: "style-loader" 
	}, {
		 // translates CSS into CommonJS
    	loader: "css-loader", options: {
                    sourceMap: true
                }
	}, {
		// compiles Sass to CSS
    	loader: "sass-loader", options: {
                    sourceMap: true
                } 
  }],
  include: PATHS.css
}

exports.font = {
  test: /\.ttf$/,
  loaders: ['file-loader']
}

exports.babel = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loaders: ['babel-loader']
};




/* Production 
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
	...
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
};

*/