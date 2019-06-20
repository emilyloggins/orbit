import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
import './Connect.css'

class ConnectItem extends Component {
  state = {
    saveDisabled: false
  };

  handleClickDelete = event => {
    // eslint-disable-next-line no-restricted-globals
    let word = confirm("Are you sure you want to delete?");
    this.setState({
      saveDisabled: true
    });
    if (word) {
      this.props.deleteMessage(this.props.message.id);
    }
  };

  render() {
    if (this.props.message.userName === this.props.activeUser.username) {
      return (
        <div>
          <div className="active-user-card clearfix float-right">
            <div className="card-body clearfix">
              <p onClick={this.alertMessage}>
                <span className="connect-active-username">{this.props.message.userName}</span><div className="active-message-body"> {this.props.message.body}</div>
              </p>
            <div className="clearfix">
              <button
                className="btn btn-sm float-right"
                disabled={this.state.saveDisabled}
                onClick={this.handleClickDelete}
              >
                <FaTrash className="delete-icon"/>
              </button>
            </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="other-user-card float-left clearfix">
            <div className="card-body">
              <p onClick={this.alertMessage}>
                <span className="connect-other-username">{this.props.message.userName}</span><div className="other-message-body">{this.props.message.body}</div>
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>


      );
    }
  }
}

export default ConnectItem;
