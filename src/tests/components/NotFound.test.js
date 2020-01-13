import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';
import '../setupTest';

test('', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  })