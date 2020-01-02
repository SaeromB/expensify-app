import React from 'react';
import ReactDOM from 'react-dom';
// Going to use the BrowserRouter to create the Router once and Route for everysingle page
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const EditExpensePage = (props) => {
  // React Routes are going to send them as components that is going to be used as <Route component/>
  console.log(props);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
  )
}

export default EditExpensePage;