import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { loginFunction } from '../auth/userManager';
import './Login.css'
import { withRouter } from 'react-router-dom'
import ufo from '../img/ufo1.png'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  submit = () => {
    loginFunction(this.state.email, this.state.password)
      .then((user) => {
        this.props.setUser(user);
        this.props.history.push("/home")
      });
  }

  register = () => {
    this.props.history.push("/register")
  }
  render() {
    return (

      <Form className="landing-div-main bgImage">
        <div className="welcome-card-div login-div">
          <div className="heading-blurb-container">
            <img src={ufo} className="logo-main login-icon" alt="ufo icon"></img>
          </div>
          <div className="input-fields">
            <FormGroup className="login-form-group">
              <Label for="pmail">Email</Label>
              <Input type="email" name="email" id="email" placeholder="notalien@orbit.com" onChange={this.handleFieldChange} />
            </FormGroup>
            <FormGroup className="login-form-group">
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleFieldChange} />
            </FormGroup>
            <Button size="lg" onClick={this.submit}>Submit</Button>
            <Link className="green-link" onClick={this.register}>Don't have an account?</Link>
          </div>
        </div>
      </Form>
    )
  }
}

export default withRouter(Login)
