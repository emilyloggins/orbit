import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from "../components/Home"
import Landing from "../components/welcome/Landing"
import PackMain from "../components/pack/PackMain"
import PackManager from "../modules/PackManager"

class ApplicationViews extends Component {

  state = {
    packs: [],
    items: [],
  }

  isAuthenticated = () => localStorage.getItem("user") !== null;

  componentDidMount () {
    const newState = {};
    PackManager.getAllPacks()
      .then(packs => { newState.packs = packs })
      .then(() => this.setState(newState));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/welcome" render={(props) => <Landing user={this.props.user} />} />
          <Route exact path="/home" render={props => {
            if (this.props.activeUser) {
              return <Home {...props}
                activeUser={this.props.activeUser}
                clearUser={this.props.clearUser} />
            } else {
              return <Redirect to="/" />
            }
          }} />
          <Route path="/login" render={(props) =>
            <Login {...props} {...this.props} 
            /> }
          />
          <Route path="/register" render={(props) =>
            <Register {...props}
              onRegister={(user) => this.setState({ user: user })} setUser={this.props.setUser} />}
          />
          <Route exact path="/pack" render={props => {
            // if (this.isAuthenticated()) {
              return <PackMain {...props}
                packs={this.state.packs}
                activeUser={this.props.activeUser} />
            // } else {
            //   return <Redirect to="/" />
            // }
          }} />
        </Router>
      </div>
    );
  }
}

export default withRouter(ApplicationViews)