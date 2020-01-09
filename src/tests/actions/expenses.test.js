import { addExpense, editExpense, removeExpense} from '../../actions/expenses' 
import { testNameToKey } from 'jest-snapshot/build/utils';

test('Should set up remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id: '123abc'
  })
})
 
// editExpense
test('Should set up edit expense action object', () => {
  const action = editExpense('1234', {note: 'New note value'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id: '1234',
    updates: {
      note: 'New note value'
    }
  })
})

test('', () => {
  const expenseData = {
    description:'Rent',
    amount: 195000,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData);
  // id is changed everytime when running the test
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    // spread data 
    expense: {
      ...expenseData,
      // Matches anything that was created
      id: expect.any(String)
    }
  })
});

test('Should setup add expense action object with default values', () => {

  const action = addExpense()
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0 
    }
  })
})