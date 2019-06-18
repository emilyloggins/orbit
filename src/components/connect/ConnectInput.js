import React, { Component } from "react";
import { Form, Input, InputGroup, Button } from "reactstrap";
import './Connect.css'

import "bootstrap/dist/css/bootstrap.min.css";

export default class ConnectInput extends Component {
  // Set initial state
  state = {
    body: "",
    userName: this.props.activeUser.username,
    userId: this.props.activeUser.id,
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewMessage = evt => {
    const newMessage = {
      body: this.state.body,
      userName: this.state.userName,
      userId: this.state.userId,
    };
    this.props.addMessage(newMessage);
  };

  render () {
    return (
      <React.Fragment>
        <Form className="input-main">
          <InputGroup className="chatInput">
            <Input
              type="text"
              ref="body"
              id="body"
              required
              placeholder="Enter your message and push submit"
              onChange={ this.handleFieldChange }
            />
          </InputGroup>
          <Button
            className="btn btn-outline-primary submitMess"
            size="sm"
            onClick={ this.constructNewMessage }
          >
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}