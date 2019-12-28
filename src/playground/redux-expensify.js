import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses : [{
    id: 'dkdkdk',
    description: 'Rent',
    note: 'This is the final payment',
    amount: 65555,
    createAt: 0, 
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};