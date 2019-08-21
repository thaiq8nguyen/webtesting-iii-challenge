import React, { Component } from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import axios from "axios";

export default class UserProfile extends Component {
  state = {
    profile: "",
    error: ""
  };

  componentDidMount() {
    axios
      .get(this.props.url)
      .then(response => {
        this.setState({ profile: response.data });
      })
      .then(error => {
        //console.log({ error: error });
      });
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Grid columns={2}>
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Card.Header>UserProfile</Card.Header>
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <Button small="tiny">Get Profile</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
          <Card.Content>
            {this.state.profile && (
              <p data-testid="resolved">{this.state.profile.user}</p>
            )}
          </Card.Content>
        </Card>
      </div>
    );
  }
}
