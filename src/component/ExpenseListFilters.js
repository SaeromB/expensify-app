import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';


class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused : null
  };

  onDatesChange = ({ startDate, endDate }) => {
    // pass in a new start date
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate))
  };

  // Added focusedInput new value
  onFocusChange = (calendarFocused) => {
    this.setState(()=>({ calendarFocused }));
  }
  render() {
    return(
      <div>
        {/* when the input changes the onChange fires */}
        {/* the value will be the text from the store */}
        <input type="text"
          value={this.props.filters.text}
          onChange={(e)=> {
          // pass in the action object 
          // changed to a stateless component to class based component
          // so we need this.props
            this.props.dispatch(setTextFilter(e.target.value));
          // console.log(e.target.value)
        }}/>
        <select value={this.props.filters.sortBy}
          onChange={(e) => {
            if(e.target.value === 'date'){
              this.props.dispatch(sortByDate())
            }else if (e.target.value === 'amount'){
              this.props.dispatch(sortByAmount())
            }
          }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate = {this.props.filters.startDate}
          endDate = {this.props.filters.endDate}
          onDatesChange = {this.onDatesChange}
          focusedInput = {this.state.calendarFocused}
          onFocusChange = {this.onFocusChange}
          numberOfMonths={1}
          showClearDates = {true}
          isOutsideRange = {()=> false}
          startDateId='start'
          endDateId='end'/>
      </div>
    )
  }
}
 
// mapStateToProps have two props(filters and  dispatch that is the same dispatch in the store )
// so we have access to dispatch in out component so we can directly dispatch action?
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);


