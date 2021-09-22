const path = require('path');

const app = path.join(__dirname, '..', '..', 'app');
const mobile = path.join(__dirname, '..', '..', 'mobileApp');
const shared = path.join(__dirname, '..', '..', 'shared');

module.exports = {
  appPath: app,
  publicFolder: path.join(app, 'public'),
  appSrc: path.join(app, 'src'),
  appIndex: path.join(app, 'src', 'index.jsx'),
  appTemplate: path.join(app, 'public', 'index.html'),

  mobileAppPath: mobile,
  mobileAppSrc: path.join(mobile, 'src'),

  sharedPath: shared,
  sharedSrc: path.join(shared, 'src'),

  rootDir: path.resolve(__dirname, '..', '..', '..'),

  distPath: path.resolve(__dirname, '..', '..', '..', './dist'),
};
