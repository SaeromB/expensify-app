import React from 'react';
import ReactDOM from 'react-dom';
// Going to use the BrowserRouter to create the Router once and Route for everysingle page
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashBoard from '../component/ExpenseDashBoard';
import AddExpensePage from '../component/AddExpensePage';
import EditExpensePage from '../component/EditExpensePage';
import HelpPage from '../component/HelpPage';
import NotFoundPage from '../component/NotFound';
import Header from '../component/Header';

const AppRouter = () => (
  <BrowserRouter>
  {/* Switch will find if there isn't a exact path than show NotFoundPage */}
    <div>
      <Header />
      <Switch>
      {/* by using exact the path will show only one component */}
        <Route path="/" component={ExpenseDashBoard} exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true}/>
        <Route path="/edit/:id" component={EditExpensePage} exact={true} />
        <Route path="/help" component={HelpPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;