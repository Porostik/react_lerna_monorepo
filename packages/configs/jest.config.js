const { appPath, mobileAppPath, sharedPath } = require('./constants');

module.exports = {
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./jest/setupTests.js'],
  moduleNameMapper: {
    '.+\\.(css|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  roots: [appPath, mobileAppPath, sharedPath],
};
