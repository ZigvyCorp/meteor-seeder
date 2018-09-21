import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { func } from 'prop-types';

import configureStore from '/imports/ui/store/configureStore';
import MainLayout from '../../ui/layouts/MainLayout';
import AppWrapperContainer from '../../ui/layouts/AppWrapper';
// Import Pages
import Home from '../../ui/pages/home';
import Login from '../../ui/pages/login';

const store = configureStore();
export const history = createHistory();

export function loggedIn() {
  return !!Meteor.userId();
}

export function isAdmin() {
  return !Roles.userIsInRole(Meteor.userId(), 'root-admin');
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      loggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  component: func.isRequired
};

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAdmin()
        ? (<Component {...props} />)
        : (<Redirect to="/" />)
    )}
  />
);

AdminRoute.propTypes = {
  component: func.isRequired
};

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <AppWrapperContainer>
          <MainLayout history={history}>
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <Route
                path="/login"
                exact
                render={props => (
                  loggedIn()
                    ? (<Redirect to="/" />)
                    : (<Login {...props} />)
                )}
              />
            </Switch>
          </MainLayout>
        </AppWrapperContainer>
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
