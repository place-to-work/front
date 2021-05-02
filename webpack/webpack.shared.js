const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const webpack = require('webpack');

console.log('node env = ', process.env.NODE_ENV);
const isDev = process.env.NODE_ENV === 'development';

const styleRules = {
	test: /\.((c|sa|sc)ss)$/i,
	use: [
		MiniCssExtractPlugin.loader,
		'css-loader',
		...(isDev ? [] :  ['postcss-loader']),
		'sass-loader',
	],
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

const fontRules =  { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }

// Эти псевдонимы реально работают, но не парсятся web-storm
// В то же время псевдонимы в tsconfig.json парсятся, но не работают
// Эти 2 вида псевдонимов созданы друг для друга
const aliases = {
	'@components': path.resolve(__dirname, '../', 'src/components'),
	'@pages': path.resolve(__dirname, '../', 'src/pages'),
	'@models': path.resolve(__dirname, '../', 'src/models'),
	'@network': path.resolve(__dirname, '../', 'src/network'),
	'@utils': path.resolve(__dirname, '../', 'src/utils'),
	'@assets': path.resolve(__dirname, '../', 'src/assets'),
};

module.exports = {
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
	module: {
		rules: [
			styleRules,
			codeRules,
			fontRules
		],

	},
	devServer: {
		historyApiFallback: true,
		contentBase: paths.outputPath,
		compress: true,
		port: 2021,
		open: true,
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: paths.htmlPath,
			inject: 'body',
		}),
		new webpack.DefinePlugin({
			BASE_URL: `'https://place-to-work.${isDev ? 'online' : 'ru'}'`,
			API_SUFFIX: "'/api/v1'",
			ROOT_DOMAIN: `'${isDev ? 'online' : 'ru'}'`,
			IS_DEV: isDev
		}),
		new WebpackPwaManifest({
			name: 'Рабочее место',
			short_name: 'Place to work',
			description: 'Find your place',
			orientation: "portrait-primary",
			start_url: "/",
			display: "fullscreen",
			publicPath: `https://place-to-work.${isDev ? 'online' : 'ru'}/`,
			crossorigin: 'anonymous',
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
