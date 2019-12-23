// This is basic redux example
import { createStore } from 'redux';
// store track the data 
// createStore needs to be a function to be the first argument
// calling state from the createStore is same as calling this.state
// default state is 0
const store = createStore((state = { count: 0}) => {
  return state;
});

//This gets the state object
console.log(store.getState());

