import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';
 
const ExpenseListFilters = (props) => (
  <div>
    {/* when the input changes the onChange fires */}
    {/* the value will be the text from the store */}
    <input type="text" value={props.filters.text} onChange={(e)=> {
      // pass in the action object 
      props.dispatch(setTextFilter(e.target.value))
      // console.log(e.target.value)
    }}/>
    <select value={props.filters.sortBy}
      onChange={(e) => {
        if(e.target.value === 'date'){
          props.dispatch(sortByDate())
        }else if (e.target.value === 'amount '){
          props.dispatch(sortByAmount())
        }
      }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
)

// mapStateToProps have two props(filters and  dispatch that is the same dispatch in the store )
// so we have access to dispatch in out component so we can directly dispatch action?
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);


