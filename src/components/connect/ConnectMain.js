import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import ConnectList from './ConnectList'
import ConnectInput from './ConnectInput'
import './Connect.css'

class ConnectMain extends Component {
  render () {
    return (
      <section className="connect-main-container messagesSection">
        <h1 className="chatHeader">Connect</h1>
        <div className="messageContainer">
          <ConnectList { ...this.props } activeUser={ this.props.activeUser } messages={ this.props.messages } />
        </div>
        <div className="messageInput">
          <ConnectInput { ...this.props } activeUser={ this.props.activeUser } addMessage={ this.props.addMessage } />
        </div>
      </section>
    );
  }
}

export default withRouter(ConnectMain)