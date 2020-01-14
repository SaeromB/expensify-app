import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // if props.expese exist then show props.expense.description if not show empty string.
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      // we need the amount with a decimal and convert to String
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState (() => ({description}));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState (() => ({note}))
    // e.parsist()
    // this.setState({note: e.target.value})
  };

  // will return a date when it is clicked
  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({createdAt}))
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(()=> ({calendarFocused : focused}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    // match(regex expressions)
    // if there is no amount or the amount is a match
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({amount}))
    }
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    
    if(!this.state.description || !this.state.amount){
      this.setState(() => ({error: 'Please provide description and amount'})) 
    } else {
      this.setState(()=>({error: ''}))
      // this props is passed down to AddExpensePage
      // Passed the data out of Expense form
      // props is passed in to the parent?
      // this makes use the form to be reused at AddExpensePage and EditExpensePage
      this.props.onSubmit({
        description: this.state.description,
        // amount is a string working at base 10
        amount: parseFloat(this.state.amount, 10 ) * 100,
        // this is a momnet object 
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      }) 
      // console.log('Submitted');
    }
  }
  
  render(){
    return( 
      <div>
        {this.state.error &&  <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}> 
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value = { this.state.description} onChange={this.onDescriptionChange} />
          <input
            type="text"
            placeholder="Amount"
            value = {this.state.amount} onChange={this.onAmountChange} />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
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