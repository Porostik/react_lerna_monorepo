const { publicFolder } = require('./constants');

module.exports = {
  static: {
    directory: publicFolder,
  },
  port: 3000,
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
    progress: true,
  },
};
