import React, { Component } from "react"
import './App.css';
import Navbar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationViews'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserFromLocalStorage } from "./auth/userManager"
import { withRouter } from 'react-router'

class App extends Component {

  state = {
    activeUser: getUserFromLocalStorage()
  }

  setUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    this.setState({
      activeUser: user
    })
  }

  clearUser = () => {
    sessionStorage.clear("user")
    this.setState({
      activeUser: null
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar activeUser={this.state.activeUser} clearUser={this.clearUser} />
        <ApplicationViews setUser={this.setUser} clearUser={this.clearUser} activeUser={this.state.activeUser} />
      </React.Fragment>
    )
  }
}

export default withRouter(App)