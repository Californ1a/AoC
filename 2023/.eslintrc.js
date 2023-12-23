module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: [
		'airbnb-base',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		'no-console': 0,
		'no-tabs': 0,
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		'no-continue': 0,
		quotes: ['error', 'single'],
		'no-restricted-syntax': ['error', {
			selector: 'ForInStatement',
			message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
		}, {
			selector: 'LabeledStatement',
			message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
		}, {
			selector: 'WithStatement',
			message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
		}],
	},
};
