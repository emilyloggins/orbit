import React, { Component } from 'react';
import Carousel from './Carousel';
import WelcomeMessage from './WelcomeMessage'
import './Home.css'

export default class Home extends Component {

  logout = () => {
    this.props.clearUser();
    this.props.history.push('/');
  }

  render() {

    return (
      <div className="bgImage">
        <div className="main-home-container">
          <div className="welcome-container">
            <WelcomeMessage {...this.props} />
          </div>
          <div className="carousel-container">
            <Carousel />
          </div>
        </div>
      </div>
    )
  }
}