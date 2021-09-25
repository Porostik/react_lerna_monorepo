import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from './index';

describe('<Checkbox />', () => {
  //
  it('snapshot <Checkbox /> with {label}', () => {
    //
    const wrapper = shallow(<Checkbox label="test" />);

    expect(wrapper).toMatchSnapshot();
  });
});
