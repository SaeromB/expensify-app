import React from 'react';
// this connects react from redux store use at individual components 
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {/* {props.filters.text}
    {props.expenses.length} */}
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id}{...expense} /> 
    })}
  </div>
);

// what kind of info do we want from the store 
// state store gets passed in as a argument
 
// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);

// When the store changes this will automatically rerun
// When the store changes the component will rerender the new values
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

// mapStateToProps is what we want from the store and ExpenseList is the component that we want the connected verson of?
export default connect(mapStateToProps)(ExpenseList);



