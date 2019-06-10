import React, { Component } from "react"
import './App.css';
import Navbar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationViews'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserFromLocalStorage } from "./auth/userManager"

class App extends Component {

  state = {
    user: getUserFromLocalStorage()
  }

  render () {
    return (
      <React.Fragment>
        <Navbar />
        <ApplicationViews user={this.state.user} getUserFromLocalStorage={this.getUserFromLocalStorage} />
      </React.Fragment>
    )
  }
}

export default App
