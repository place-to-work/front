const path = require('path');

module.exports = {
	root: path.resolve(__dirname, '../'),
	outputPath: path.resolve(__dirname, '../', 'public'),
	entryPath: path.resolve(__dirname, '../', 'src/index.tsx'),
	htmlPath: path.resolve(__dirname, '../', 'src/index.html'),
};