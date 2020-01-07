import React from 'react';
/// Going to use the BrowserRouter to create the Router once and Route for everysingle page
// import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// Edit expense need the current value
const EditExpensePage = (props) => {
  // React Routes are going to send them as components that is going to be used as <Route component/>
  // console.log(props);
  return (
    <div>
      {/* Editing the expense with id of {props.match.params.id} */}
      <ExpenseForm
        // This makes the data floating
        // expense ={props.expense}
        // dispatch action to edit expense
        expense={props.expense}
        onSubmit={(expense)=> {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/')
        }} />
        <button onClick={()=>{
        props.dispatch(removeExpense({id: props.expense.id}))
        props.history.push('/');
        }}>Remove</button>
    </div>
  )
}

// Give the component the current expense 
// find the expenses that matches the props.id
const mapToStateProps = (state, props ) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapToStateProps)(EditExpensePage);