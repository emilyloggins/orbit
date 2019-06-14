import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import './Connect.css'


class ConnectItem extends Component {
  state = {
    saveDisabled: false
  };

  handleClickDelete = event => {
    // eslint-disable-next-line no-restricted-globals
    let word = confirm("Are you sure you want to delete this message?");
    this.setState({
      saveDisabled: true
    });
    if (word) {
      this.props.deleteMessage(this.props.message.id);
    }
  };

  alertMessage = () => {
    alert("You wanna add this dude?");
  };

  render () {
    if (this.props.message.userName === this.props.activeUser.userName) {
      return (
        <div>
          <div className="cardBodyUser float-left clearfix">
            <div className="card-body clearfix">
              <p onClick={ this.alertMessage }>
                <span className="userNameChat">{ this.props.message.userName }</span>: { this.props.message.body }
              </p>
              <small className="float-right text-muted">{ this.props.message.dateTime }</small>
            </div>
            <div className="clearfix">
              <button
                className="btn btn-outline-danger btn-sm mx-3 float-right"
                disabled={ this.state.saveDisabled }
                onClick={ this.handleClickDelete }
              >
                <FaTrashAlt />
              </button>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm float-right"
                onClick={ () => {
                  this.props.history.push(
                    `/messages/${this.props.message.id}/edit`
                  );
                } }
              >
                <FaEdit />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="cardBodyOther clearfix float-right">
            <div className="card-body">
              <p onClick={ this.alertMessage }>
                <span className="userNameChat">{ this.props.message.userName }</span>: { this.props.message.body }
              </p>
              <small className="float-right text-muted">{ this.props.message.dateTime }</small>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      );
    }
  }
}

export default ConnectItem;
