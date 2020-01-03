import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

// const date = new Date();

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  state = {
    description:'',
    note: '',
    amount:'',
    createdAt: moment(),
    calanderFocused: false
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState (() => ({description}))
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState (() => ({note}))
    // e.parsist()
    // this.setState({note: e.target.value})
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({createdAt}))
  }

  onFocusChange = ({focused}) => {
    this.setState(()=> ({calanderFocused : focused}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    //match(regex expressions)
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
      this.setState(() => ({amount}))
    }
  }
  
  render(){
    return( 
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value = { this.state.description} onChange={this.onDescriptionChange} />
          <input
            type="number"
            placeholder="Amount"
            value = {this.state.amount} onChange={this.onAmountChange} />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calanderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            // this will make everysingle day avalible 
            isOutsideRange={()=> false }
            />
          <textarea
            placeholder=" Add a note for your expenses (optional)"
            value = {this.state.note} onChange={this.onNoteChange} >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}