require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import 'whatwg-fetch';

class AppComponent extends React.Component {
  state = {
    original: ''
  }

  componentWillMount() {
    fetch('../res/original.txt')
    .then((response) => {
      response.text().then((text) => {
        this.setState({ original: text });
      });
    });
  }

  render = () => {
    return (
      <div className="index">
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              { this.state.original }
            </Col>
            <Col md={6}>
              second column
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
