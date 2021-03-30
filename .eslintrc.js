module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'implicit-arrow-linebreak': [
			'error',
			'beside'
		],
		'arrow-body-style': [
			'error',
			'as-needed',
		],
		'arrow-parens': [
			'error',
			'always',
		],
		"@typescript-eslint/ban-ts-ignore": 0,
		"@typescript-eslint/ban-ts-comment": 0,
		"ban-ts-ignore": 0,
		"ban-ts-comment": 0,
		"react/prop-types": 0,
	}
};
