import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from "../components/Home"
import Landing from "../components/welcome/Landing"
import { logout, loginFunction } from "../auth/userManager";

class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("user") !== null;

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" render={(props) => <Landing user={this.props.user} />} />
          <Route exact path="/home" render={(props) => <Home                   {...props}
            {...this.props}
            user={ this.state.user }
            onLogout={logout} />
          } />
          <Route path="/login" render={(props) =>
            <Login {...props} setUser={this.setUser}
              onLogin={(user) => this.setState({ user: user })} />}
          />
          <Route path="/register" render={(props) =>
            <Register {...props}
              onRegister={(user) => this.setState({ user: user })} setUser={this.setUser} />}
          />
        </Router>
      </div>
    );
  }
}

export default withRouter(ApplicationViews)