import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

import Page404 from './components/pageNotFound/page404';
import Navbar from './components/UI/navbar/Navbar';
import Auth from './containers/auth/auth'
import Home from './containers/home/home';
import PollDetail from './containers/home/pollDetail/pollDetail';
import Leaderboard from './containers/leaderboard/leaderboard';
import NewPoll from './containers/newPoll/newPoll';

const App = props => {
  let guardedPaths = <Redirect to={{ pathname: '/profile', redirect: window.location.pathname}} />
  if (props.currentUser) {
    guardedPaths = (
      <div>
        <Route path='/leaderboard' exact component={Leaderboard} />
        <Route path='/add' exact component={NewPoll} />
        <Route path='/questions/:id' component={PollDetail} />
        <Route path='/' exact component={Home} />
        <Route path='/pageNotFound' component={Page404} />
      </div>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path='/profile' exact render={(props) => <Auth {...props} />} />
        {guardedPaths}
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(App)
