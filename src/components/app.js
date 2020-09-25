import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './navbar'
import Home from './pages/home';
import ContactMe from './pages/contact-me';
import BlogDetail from './pages/blog-detail';
import Login from './pages/login';
import Icons from '../helpers/icons';

export default function App() {
  const user = {
    firstName: 'Brady',
    lastName: 'Reese'
  }

  Icons();

  return (
    <Router>
      <div className='app'>
        <Navbar user={user} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact-me' component={ContactMe} />
          <Route path='/blog-detail' component={BlogDetail} />
          <Route path='/login' component={Login} />
          {/* TODO Fix Links */}
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}