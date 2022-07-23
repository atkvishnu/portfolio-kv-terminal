module.exports = {
    plugins: ['prettier'],
    extends: ['next/core-web-vitals'],
    rules: {
        'no-console': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'prettier/prettier': [
            'warn'
        ]
    },

};
