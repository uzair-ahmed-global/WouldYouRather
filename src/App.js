import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

import Navbar from './components/UI/navbar/Navbar';
import Auth from './containers/auth/auth'
import Home from './containers/home/home';
import PollDetail from './containers/home/pollDetail/pollDetail';
import Leaderboard from './containers/leaderboard/leaderboard';
import NewPoll from './containers/newPoll/newPoll';

const App = props => {
  let guardedPaths = <Redirect to='/profile' />
  if (props.currentUser) {
    guardedPaths = (
      <div>
        <Route path='/leaderboard' exact component={Leaderboard} />
        <Route path='/new' exact component={NewPoll} />
        <Route path='/' exact component={Home} />
        <Route path='/questions/:id' component={PollDetail} />
      </div>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path='/profile' exact component={Auth} />
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
