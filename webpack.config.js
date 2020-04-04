const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
	return {
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: { loader: 'babel-loader' }
				}
			]
		},
		optimization: {
			splitChunks: { chunks: 'all', minSize: 0 },
			minimize: true,
			minimizer: [
				new UglifyJsPlugin({
					uglifyOptions: {
						mangle: false,
						output: {
							beautify: env.NODE_ENV !== 'production' ? true : false
						}
					}
				})
			],
			usedExports: true,
			sideEffects: true
		}
	};
};
