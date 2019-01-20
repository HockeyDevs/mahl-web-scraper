module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        // general js
        'import/default': 1,
        'import/named': 1,
        'import/namespace': [1, {allowComputed: true}],
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': [1, {devDependencies: true}],
        'import/order': [1, {'newlines-between': 'always'}],
        'no-confusing-arrow': 0,
        'no-underscore-dangle': 0,

        // react-specific
        'react/require-default-props': 0,
        'react/no-unused-prop-types': 0,
        'react/jsx-filename-extension': 0,

        // custom
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
    },
}
