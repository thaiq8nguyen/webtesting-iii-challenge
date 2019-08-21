import React from "react";

import Display from "../display/Display";
import Controls from "../controls/Controls";
import UserProfile from "../UserProfile/UserProfile";
import { Grid } from "semantic-ui-react";

class Dashboard extends React.Component {
  state = {
    locked: false,
    closed: false
  };

  render() {
    const { closed, locked } = this.state;

    return (
      <>
        <Grid columns={2} container padded="vertically">
          <Grid.Column textAlign="center">
            <Display locked={locked} closed={closed} />
            <Controls
              locked={locked}
              closed={closed}
              toggleLocked={this.toggleLocked}
              toggleClosed={this.toggleClosed}
            />
          </Grid.Column>
          <Grid.Column>
            <UserProfile />
          </Grid.Column>
        </Grid>
      </>
    );
  }

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }));
  };

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }));
  };
}

export default Dashboard;
