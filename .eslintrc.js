module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'wdio'
    ],
    rules: {
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        'no-trailing-spaces': 'error',
        '@typescript-eslint/semi': [
            'error'
        ]
    },
    extends: [
        'plugin:wdio/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
};