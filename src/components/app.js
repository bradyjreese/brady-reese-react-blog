import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './navbar'
import RenderPage from './render-page'
import BlogDetail from './pages/blog-detail'
import Icons from '../helpers/icons';

export default function App() {
  // TODO update user
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
          <Route path='/:page' component={RenderPage} />
          {/* TODO Blog Links */}
          <Route path='/blog-detail' render={() => (<BlogDetail />)} />
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}