// hoc(higher order component) - a component that renders another component
// Using HOC the 
// Reuse code
// Render hijecking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is : {props.info}</p>
  </div>   
);

const withAdminWarning = (WrappedComponent) => {
  return(props) => (
    <div>
      {props.isAdmin && <p>This is a private info </p>}
      <p>This is a private info</p>
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>please login in</p>)}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details"/>, document.getElementById('app'))
ReactDOM.render(<AdminInfo isAuthenticated={true} info="This is the details"/>, document.getElementById('app'))