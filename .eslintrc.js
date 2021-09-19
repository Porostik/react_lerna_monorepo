module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
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
      webpack: {},
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
};
