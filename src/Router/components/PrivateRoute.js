import  React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: C, isAuth, ...rest }) => {
    return (
        <Route 
          {...rest}
          render={({ location, ...rest }) => {
            return isAuth 
              ? <C {...rest} location={location}/> 
              : (<Redirect to={{ pathname: "/", state: { from: location } }}/>)
          }}
        />
    )
}

export default PrivateRoute;