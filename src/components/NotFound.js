import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const NotFoundPage = () => (
  <div>
    {/* Link will use the client server */}
    404! <Link to="/">Go Home</Link>
  </div>
)

export default NotFoundPage;