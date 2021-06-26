import React from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

const Switcher = ({ routes, auth }) => {
  return (
      <Switch>
        {routes.map(({ id, isPrivate, exact, path, component: C }) => {
          return isPrivate
            ? (<PrivateRoute key={id} exact={exact} path={path} isAuth={auth} component={C} />)
            : (<Route key={id} exact path={path} render={(props) => <C {...props} />} />)
        })}
      </Switch>
  )
}

export default Switcher;
