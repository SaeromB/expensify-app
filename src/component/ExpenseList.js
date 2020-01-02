import React from 'react';
// this connects react from redux store use at individual components 
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.filters.text}
    {props.expenses.length}
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
    expenses: state.expenses,
    filters: state.filters
  }
}
export default connect(mapStateToProps)(ExpenseList);