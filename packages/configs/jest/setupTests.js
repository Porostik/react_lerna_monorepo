/* eslint-disable */
require('regenerator-runtime/runtime');
const { shallow, render, mount, configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-17-updated');

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

jest.spyOn(window.localStorage.__proto__, 'setItem');
window.localStorage.__proto__.setItem = jest.fn();

jest.spyOn(window.localStorage.__proto__, 'getItem');
window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify('test'));
