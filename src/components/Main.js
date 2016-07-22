require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Grid } from 'react-bootstrap';
import ChangeRow from './ChangeRow';
import 'whatwg-fetch';

class AppComponent extends React.Component {
  state = {
    changes: []
  }

  componentWillMount() {
    fetch('../res/kenpo.json')
    .then((response) => response.json())
    .then((json) => this.setState({ changes: json }));
  }

  render = () => {
    return (
      <div className="container">
        <Grid>
          { this.state.changes.map(change => <ChangeRow key={change.id} change={change} />) }
        </Grid>
      </div>
    );
  }
}

export default AppComponent;
