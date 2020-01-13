import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBoard from '../../components/ExpenseDashBoard';
import '../setupTest';

test('', () => {
  const wrapper = shallow(<ExpenseDashBoard />);
  expect(wrapper).toMatchSnapshot();
})
