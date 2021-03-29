const {merge} = require('webpack-merge');
const shared = require('./webpack/webpack.shared');

const envs = {
	development: 'dev',
	production: 'prod',
};

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./webpack/webpack.${env}.js`);

const merged = merge(shared, envConfig);
module.exports = merge(shared, envConfig);
