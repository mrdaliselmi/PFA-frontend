module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'airbnb',
		'prettier',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'eslint-config-prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react', 'react-refresh', 'prettier'],
	rules: {
		'import/no-absolute-path':'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'react/prop-types': 'off',
		'prettier/prettier': 'error',
		'jsx-a11y/anchor-is-valid': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'no-unused-expressions': [
			'error',
			{ allowShortCircuit: true, allowTernary: true },
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],
		'linebreak-style': 'off',
		'implicit-arrow-linebreak': 'off',
		indent: 'off',
		'object-curly-newline': 'off',
		'operator-linebreak': 'off',
		'no-confusing-arrow': 'off',
		'function-paren-newline': 'off',
		'no-mixed-operators': 'off',
		'no-underscore-dangle': 'off',
		'no-plusplus': 'off',
		'no-param-reassign': 'off',
		'no-unused-vars': 'off',
		'no-shadow': 'off',
		'global-require': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'react/button-has-type': 'off',
		'react/jsx-no-constructed-context-values': 'off',
		'react/function-component-definition': 'off',
		'react-hooks/rules-of-hooks': 'off',
		'no-nested-ternary': 'off',
	},
};
