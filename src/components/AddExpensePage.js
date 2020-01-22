// Going to use the BrowserRouter to create the Router once and Route for everysingle page
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.onSubmit(expense);
    this.props.history.push('/')
  };
  render(){
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>  
    )
  }
}

// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm onSubmit={(expense)=> {
//       // Added the date to the redux-store
//       // props.dispatch(addExpense(expense));
//       props.onSubmit(expense);
//       // change pages
//       props.history.push('/');
//     }}/>
//   </div>
// );

// mapDispatchToProps a new wrapper component will subscribe to Redux store update
// when the store needs to updated mapDispatchToProps will be called

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (expense) => dispatch(addExpense(expense))
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  onSubmit : (expense) => dispatch(addExpense(expense))
});

// This needs to be connected in the store 
// Now props. dispatch can be used.
export default connect(undefined, mapDispatchToProps)(AddExpensePage);