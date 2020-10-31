import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/view/Dashboard';
import Country from './components/view/Country';
import User from './components/view/User';
import Login from './components/view/Auth/Login';
import Register from './components/view/Auth/Register';

const NoMatch: FunctionComponent = () => <Redirect to="/login" />;

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <div className="container">
        <div id="responsive--screen">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/country" component={Country} />
              <Route exact path="/user" component={User} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
