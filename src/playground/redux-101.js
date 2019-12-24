// This is basic redux example
import { createStore } from 'redux';
// store track the data 
// createStore needs to be a function to be the first argument
// calling state from the createStore is same as calling this.state
// default state is 0
const store = createStore((state = { count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count : state.count + incrementBy
    };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count : state.count - decrementBy
    }
    case 'RESET':
      return {
        count : 0
    }
    case 'SET':
      return {
        count: action.count
    }
    default:
      return state;
  }
  // if(action.type === 'INCREMENT') {
  //   return {  
  //   count : state.count + 1
  //   }
  // } else {
  //   return state;

  // }
});

const unsubscribe = store.subscribe(()=> {
  console.log(store.getState());
})



// Actions will help change the Redux Store
// Actions is a object that gets sent to the store
// Actions - than a object that gets sent to the store

// Increment the count 
// type property is action type
// this will run store above
// use action object to make changes to the state
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
 })

 // This will only show Increment
// unsubscribe();

store.dispatch({
  type: 'DECREMENT'
})


store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
})

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'SET',
  count: 101
})

unsubscribe();


 
 //This gets the state object
//  console.log(store.getState());




