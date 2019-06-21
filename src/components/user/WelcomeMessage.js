import React, { Component } from 'react';
import { Grid, Message, Container, Header, Button } from 'semantic-ui-react';
import { userInfo } from 'os';
import Carousel from './Carousel';
import './Home.css'

export default class Home extends Component {

  render() {

    return (
      <div className="welcome-blurb">
        <h1 className="welcome-blurb-text">Welcome back, {this.props.activeUser.firstName}!</h1>
      </div>
    )
  }
}