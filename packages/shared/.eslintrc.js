const path = require('path');

module.exports = {
  extends: [path.resolve(__dirname, '..', '..', '.eslintrc.js')],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
