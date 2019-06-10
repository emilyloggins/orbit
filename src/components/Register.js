import React, { Component } from 'react';
import { saveUserToJsonServer } from '../auth/userManager';
import { register } from '../auth/userManager'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Example extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    street: '',
    street2: '',
    city:'',
    state: '',
    zip:''
  }

  submit = () => {
    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      street: this.state.street,
      city: this.state.city,
      zip: this.state.zip
    }

    register(user)

    saveUserToJsonServer(user)
      .then((user) => {
        console.log(user)
        this.props.history.push('/');
        this.props.onRegister(user);
      });
  }

  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="first name" onChange={(e) => this.setState({ firstName: e.target.value })} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="lastName" id="lastName" placeholder="last name" onChange={(e) => this.setState({ lastName: e.target.value })} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="userName" id="userName" placeholder="username" onChange={(e) => this.setState({ username: e.target.value })} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password"  onChange={(e) => this.setState({ password: e.target.value })} />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="street">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}/>
        </FormGroup>
        <FormGroup>
          <Label for="street">Address</Label>
          <Input type="text" name="street" id="street" placeholder="1234 Main St" onChange={(e) => this.setState({ street: e.target.value })}/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input type="text" name="city" id="city" placeholder="City" onChange={(e) => this.setState({ city: e.target.value })} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="text" name="state" id="state" placeholder="State" onChange={(e) => this.setState({ state: e.target.value })}/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type="text" name="zip" id="zip" placeholder="Zip Code" onChange={(e) => this.setState({ zip: e.target.value })}/>
            </FormGroup>  
          </Col>
        </Row>
        <Button onClick={this.submit}>Register</Button>
      </Form>
    );
  }
}
