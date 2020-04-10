import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';

export default function App() {
  return (
    <div className="max-w-screen-md mx-auto px-6">
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/posts" component={PostsPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}
