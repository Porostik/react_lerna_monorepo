import * as core from '@actions/core';

const en = require('../../../../packages/app/src/test.json');

function main() {
  Object.keys(en).forEach((key) => {
    core.info(en[key]);
  });
}

main();
