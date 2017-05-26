/* https://survivejs.com/react/advanced-techniques/styling-react/ */
"use strict";

const path = require('path');
const webpack = require('webpack');

var src  = path.resolve(__dirname, 'client/src');
var dist = path.resolve(__dirname, 'client/dist');

console.log(src+'/css');

module.exports = {
    entry: {
		app: ['babel-polyfill', src]
	},

    output: {
        path: dist,
        filename: 'bundle.js'
    },

    module: {
        rules: [

            /*{ enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            },*/
            
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: src+'/css'
            },
            
           /* { 
                test: /\.scss/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },*/
            
            {
                test: /\.ttf$/,
                loaders: ['file-loader']  
            },

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            
        ],
        
    },

    watch: true,

	resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: 'eval-source-map',

    devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: process.env.host,
			port: 8888,
			contentBase: dist,
	}, 
	
	plugins: [
	    new webpack.HotModuleReplacementPlugin({
	    	multistep: true
		})
	]
}
