import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;
// set the values 

// Jest will wait for this promise to resolve before running tests.
beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  // AddExpense has two props onSubmit and push
  // jest.function()
  // const onSubmit = jest.fn();
  // history will equal to history.push = jest function
  // const history = { push: jest.fn()}
  // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  //snapshot
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  // const onSubmit = jest.fn();
  // const history = { push: jest.fn()}
  // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});

