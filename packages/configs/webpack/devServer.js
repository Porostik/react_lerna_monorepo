const { publicFolder } = require('../constants');

module.exports = {
  static: {
    directory: publicFolder,
  },
  port: 3000,
  historyApiFallback: true,
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
    progress: true,
  },
};
