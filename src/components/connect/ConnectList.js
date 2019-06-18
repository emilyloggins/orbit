import React, { Component } from "react";
import { withRouter } from "react-router";
import ConnectItem from "./ConnectItem";
import './Connect.css'


class ConnectList extends Component {
  render() {
    return (
      <section className="messages">
        <div>
          {this.props.messages.map(item => {
            return (
              <ConnectItem
                activeUser={this.props.activeUser}
                key={item.id}
                message={item}
                {...this.props}
                deleteMessage={this.props.deleteMessage}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default withRouter(ConnectList);