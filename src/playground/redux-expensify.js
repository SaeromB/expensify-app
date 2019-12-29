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

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

const sortByAmount = (amount) => ({
  type: 'SORT_BY_AMOUNT',
  amount
})

const sortByDate = (date) => ({
  type: 'SORT_BY_DATE',
  date
})

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

const expensesReducerDefaultState = [];

// action is what has changed 
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE': 
      return [...state, action.expense]
      // return state.concat(action.expense)
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
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

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// Filters reducers

store.dispatch(setStartDate({startDate:125}));
store.dispatch(setStartDate());
store.dispatch(setEndDate({endDate:1250}));

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

// Spread object operater

// const user = {
//   name: 'JJ',
//   age: '25',  
// }

// console.log ({
//   ...user,
//   location: 'Seoul',
//   age: '27'
// })