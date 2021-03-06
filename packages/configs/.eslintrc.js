const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'plugin:import/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.js'),
      },
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
