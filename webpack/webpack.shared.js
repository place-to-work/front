const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DevServer = require('webpack-dev-server');

const styleRules = {
	test: /\.((c|sa|sc)ss)$/i,
	use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
};

const codeRules = {
	test: /\.jsx?$/,
	exclude: /(node_modules)/,
	loader: "babel-loader",
	options: {
		presets: [
			"@babel/preset-env",
			"@babel/preset-react",
			"@babel/preset-typescript",
		],
		plugins: [
			'@babel/plugin-proposal-export-default-from',
			'@babel/plugin-syntax-dynamic-import',
		]
	}
};

module.exports = {
	mode: process.env.NODE_ENV,
	entry: paths.entryPath,
	output: {
		filename: 'bundle.js',
		path: paths.outputPath,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', ".tsx"]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: paths.outputPath,
		compress: true,
		port: 2021,
		open: true,
	},
	devtool: 'eval',
	module: {
		rules: [
			styleRules,
			codeRules,
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: paths.htmlPath,
			inject: 'body',
		}),
		new MiniCssExtractPlugin(),
	]
};
