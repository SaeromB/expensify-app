import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({description='', note='', amount=0, createAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
})

const removeExpense = ( {id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE': 
      return [...state, action.expense]
      // return state.concat(action.expense)
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {
        return id !== action.id
      })
    default:
      return state;
  }
}

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
}
// Store Creation
const store = createStore(combineReducers({
  expenses : expensesReducer,
  filter : filterReducer
}))

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

store.dispatch(removeExpense({ id: expenseOne.expense.id}));

console.log(expenseOne);



// Filters reducers
// text => '', sortBy => 'Date' , startDate = undefined, endDate = undefined


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