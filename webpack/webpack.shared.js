const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

const styleRules = {
	test: /\.((c|sa|sc)ss)$/i,
	use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
};

const eslintLoader = {
	test: /\.(js|ts)x?$/,
	exclude: /(node_modules)/,
	loader: 'eslint-loader',
	include: paths.src,
	enforce: 'pre',
	options: {
		fix: true,
		emitError: true,
		emitWarning: true
	},
};

const codeRules = {
	test: /\.(js|ts)x?$/,
	exclude: /(node_modules)/,
	loader: 'babel-loader',
	options: {
		presets: [
			'@babel/preset-env',
			'@babel/preset-react',
			'@babel/preset-typescript',
		],
		plugins: [
			['@babel/plugin-proposal-decorators', {
				legacy: true,
			}],
			'@babel/plugin-proposal-export-default-from',
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-proposal-object-rest-spread',
			"@babel/plugin-transform-runtime",
		]
	}
};

// Эти псевдонимы реально работают, но не парсятся web-storm
// В то же время псевдонимы в tsconfig.json парсятся, но не работают
// Эти 2 вида псевдонимов созданы друг для друга
const aliases = {
	'@components': path.resolve(__dirname, '../', 'src/components'),
	'@pages': path.resolve(__dirname, '../', 'src/pages'),
	'@models': path.resolve(__dirname, '../', 'src/models'),
	'@network': path.resolve(__dirname, '../', 'src/network'),
};

module.exports = {
	optimization: {
		minimize: true,
	},
	mode: process.env.NODE_ENV,
	entry: paths.entryPath,
	output: {
		filename: 'bundle.js',
		path: paths.outputPath,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: aliases,
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

		new WebpackPwaManifest({
			name: 'Рабочее место',
			short_name: 'Place to work',
			description: 'Find your place',
			orientation: "portrait-primary",
			start_url: "/",
			display: "standalone",
			crossorigin: 'use-credentials',
			background_color: '#ffffff',
			icons: [
				{
					src: path.resolve('src/assets/PlaceToWork.png'),
					sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
				}
			]
		})
	]
};
