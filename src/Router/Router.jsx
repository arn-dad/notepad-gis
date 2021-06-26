import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

const Router = ({ routes, auth }) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ id, isPrivate, exact, path, component: C }) => {
          return isPrivate
            ? (<PrivateRoute key={id} exact={exact} path={path} isAuth={auth} component={C} />)
            : (<Route key={id} exact path={path} render={(props) => <C {...props} />} />)
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
