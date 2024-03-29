import React, { Component } from 'react';
import './Home.css'
import orbit from '../../img/logo/OrbitLogo1-Icon.svg'

export default class Home extends Component {
  render() {
    return (
      <div className="welcome-blurb">
        <img src={orbit} className="orbit-home-icon" alt="ufo icon"></img>
        <h1 className="welcome-blurb-text">Welcome, {this.props.activeUser.firstName}!</h1>
        <h2 className="warning-blurb">Here are some things you may want to be on the look out for:</h2>
      </div>
    )
  }
}