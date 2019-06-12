import React, { Component } from 'react';
import { Grid, Message, Container, Header, Button } from 'semantic-ui-react';
import { userInfo } from 'os';

export default class Home extends Component {

  logout = () => {
    this.props.clearUser();
    this.props.history.push('/');
  }

  render() {

    return (
      <Container className="home--container">
        <Grid>
          <Button
            onClick={this.logout()}
            content="Log Out"
            color="purple" />
          <Grid.Row centered>
            <Grid.Column largeScreen={8} computer={10} tablet={12} mobile={16}>
              <Header textAlign="center">Welcome!</Header>
              <Message
                icon="lock"
                header="Protected Content"
                content="This component should only be visible if a user is logged in" />
            </Grid.Column>
          </Grid.Row>
        </Grid >
      </Container>
    )
  }
}