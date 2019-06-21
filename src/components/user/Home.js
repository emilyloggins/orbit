import React, { Component } from 'react';
import { Grid, Message, Container, Header, Button } from 'semantic-ui-react';
import { userInfo } from 'os';
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
          <WelcomeMessage {...this.props } />
          <Carousel />
        </div>
      </div>
    )
  }
}