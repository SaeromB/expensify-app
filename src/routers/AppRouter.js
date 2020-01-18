import React from 'react';
// Going to use the BrowserRouter to create the Router once and Route for everysingle page
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
  {/* Switch will find if there isn't a exact path than show NotFoundPage */}
    <div>
      <Header />
      <Switch>
      {/* by using exact the path will show only one component */}
        <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true}/>
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage}  />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;


