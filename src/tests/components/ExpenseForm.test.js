import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import '../setupTest';

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
})

test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  // getting the length of the error field.
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  // after the error state changes it gets rendered 
  expect(wrapper).toMatchSnapshot()
});
test('Should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'New Note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value)
})

test('Should set amount if valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  // Check if the amount equals with the value we set
  expect(wrapper.state('amount')).toBe(value);
});

test('Should not set amount if valid input', () => {
  const value = '12.122';
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});
