import { shallow } from 'enzyme';
import React from 'react';
import { DesktopApp } from './App';

describe('<DesktopApp />', () => {
  //
  it('should render <DesktopApp />', () => {
    const wrapper = shallow(<DesktopApp />);

    expect(wrapper.find('h1')).toBeDefined();
  });
});
