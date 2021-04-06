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
		"@typescript-eslint/no-explicit-any": 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'react/display-name': 0,
	},
	"settings": {
		"react": {
			"createClass": "createReactClass", // Regex for Component Factory to use,
		                                           // default to "createReactClass"
			"pragma": "React",  // Pragma to use, default to "React"
			"fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
			"version": "detect", // React version. "detect" automatically picks the version you have installed.
		                             // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
		                             // default to latest and warns if missing
		                             // It will default to "detect" in the future
			"flowVersion": "0.53" // Flow version
		},
		"propWrapperFunctions": [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			"forbidExtraProps",
			{"property": "freeze", "object": "Object"},
			{"property": "myFavoriteWrapper"}
		],
		"linkComponents": [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			"Hyperlink",
			{"name": "Link", "linkAttribute": "to"}
		]
	}
};
