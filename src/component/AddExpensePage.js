// Going to use the BrowserRouter to create the Router once and Route for everysingle page
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <ExpenseForm onSubmit={(expense)=> {
      // Added the date to the redux-store
      props.dispatch(addExpense(expense));
      // change pages
      props.history.push('/help');
    }}/>
  </div>

)

// This needs to be connected in the store 
// Now props. dispatch can be used.
export default connect()(AddExpensePage);