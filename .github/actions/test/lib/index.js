'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const core = require('@actions/core');
const en = require('../../../../packages/app/src/test.json');
function main() {
  Object.keys(en).forEach((key) => {
    core.info(en[key]);
  });
}
main();
