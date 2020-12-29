import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import AllUsers from './components/AllUsers';
import UserReposDetail from './components/UserReposDetail';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar></NavigationBar>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/all-users' component={AllUsers} />
            <Route path='/user-repos-detail' component={UserReposDetail} />
          </Switch>
          <Footer></Footer>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;