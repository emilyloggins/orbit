import React, { Component } from "react"
import './App.css';
import Navbar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationViews'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserFromLocalStorage } from "./auth/userManager"

class App extends Component {

  state = {
    activeUser: getUserFromLocalStorage()
  }

  setUser = (user) => {
    //puts the active user in local storage, necessary for editing user profile
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({
      activeUser: user
    })
  }

  render () {
    return (
      <React.Fragment>
        <Navbar setUser={ this.setUser } activeUser={ this.state.activeUser } />
        <ApplicationViews setUser={ this.setUser } activeUser={ this.state.activeUser } />
      </React.Fragment>
    )
  }
}

export default App
