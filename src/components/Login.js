import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { loginFunction } from '../auth/userManager';
import './Login.css'
import { withRouter } from 'react-router-dom'
import ufo from '../img/ufo1.png'
import '../components/welcome/Landing.css'
import orbit from '../img/logo/OrbitLogo1-Icon.svg'

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
        this.props.history.push("/packs")
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
            <img src={orbit} className="orbit-icon" alt="ufo icon"></img>
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
            <div className="login-buttons">
              <Button size="lg" onClick={this.submit}>Submit</Button>
              <Link className="green-link" to="/">Don't have an account?</Link>
            </div>
          </div>
        </div>
      </Form>
    )
  }
}

export default withRouter(Login)
