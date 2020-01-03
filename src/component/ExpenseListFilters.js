import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from '../actions/filters';
import { removeExpense } from '../actions/expenses';

const ExpenseListFilters = (props) => (
  <div>
    {/* when the input changes the onChange fires */}
    {/* the value will be the text from the store */}
    <input type="text" value={props.filters.text} onChange={(e)=> {
      // pass in the action object 
      props.dispatch(setTextFilter(e.target.value))
      // console.log(e.target.value)
    }}/>
    <button onChange={props.removeExpense}>Remove</button>
  </div>
)

// mapStateToProps have two props(filters and  dispatch that is the same dispatch in the store )
// so we have access to dispatch in out component so we can directly dispatch action?
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    expenses: state.expenses

  }
}

export default connect(mapStateToProps)(ExpenseListFilters);