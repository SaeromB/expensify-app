import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage';
import '../setupTest';

test('', () => {
  const wrapper = shallow(<ExpenseDashBoardPage />);
  expect(wrapper).toMatchSnapshot();
})
