const paths = require('./paths');

const eslintRules = {
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

module.exports = {
	devServer: {
		historyApiFallback: true,
		contentBase: paths.outputPath,
		compress: true,
		port: 2021,
		open: true,
	},
	module: {
		rules: [
			eslintRules,
		]
	}
}