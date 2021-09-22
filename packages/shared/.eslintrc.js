const path = require('path');

module.exports = {
  extends: [path.resolve(__dirname, '..', 'configs', '.eslintrc.js')],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
