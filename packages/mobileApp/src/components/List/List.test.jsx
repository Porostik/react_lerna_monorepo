import { shallow } from 'enzyme';
import React from 'react';
import { List } from './List';

describe('<List />', () => {
  //
  describe('{list} prop', () => {
    //
    it('should render 3 items from props', () => {
      const list = [{}, {}, {}];

      const wrapper = shallow(<List list={list} />);

      expect(wrapper.find('.list-item')).toHaveLength(list.length);
    });
  });
});
