import React from 'react';
import {shallow} from 'enzyme';
// getting the unconnected version?
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import '../setupTest';

test('Should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseList with empty expense', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
})