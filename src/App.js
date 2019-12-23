import React from 'react';
import ReactDOM from 'react-dom';
// Going to use the BrowserRouter to create the Router once and Route for everysingle page
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import nomalize.css will make the css look the same in every browser(Chrome, Firefox, IE)

const ExpenseDashBoard = () => (
  <div>
    This is from my dashboard component
  </div>
)

const AddExpensePage = () => (
  <div>
    This is my add Expense compnent
  </div>
)

const EditExpensePage = () => (
  <div>
    Edit
  </div>
)

const HelpPage = () => (
  <div>
    Help
  </div>
)

const NotFoundPage = () => (
  <div>
    404!
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      {/* by using exact the path will show only one component */}
      <Route path="/" component={ExpenseDashBoard} exact={true}/>
      <Route path="/create" component={AddExpensePage} exact={true}/>
      <Route path="/edit" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>

)

ReactDOM.render(routes, document.getElementById('app'));