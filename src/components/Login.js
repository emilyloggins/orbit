import React, { Component } from 'react';
import { Form, Button, Container, Grid, Segment, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { loginFunction } from '../auth/userManager';
import './Login.css'
import { withRouter } from 'react-router-dom'

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

  render() {
    return (

      <Container className="auth--container">
        <Grid>
          <Grid.Row centered>
            <Grid.Column largeScreen={6} computer={6} tablet={10} mobile={16}>
              <Segment>
                <Header as="h1" textAlign="center">
                  Log In
                </Header>
                <Form className="login--form" onSubmit={this.submit}>
                  <Form.Field
                    control="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter an email"
                    onChange={this.handleFieldChange}
                  />
                  <Form.Field
                    control="input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleFieldChange}
                  />
                  <Form.Field control="input" type="hidden" />
                  <Button fluid content="Log in" color="green" />
                </Form>
                <Message className="auth--message">
                  Not registered yet? <Link to="/register">Sign Up</Link>
                </Message>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default withRouter(Login)
