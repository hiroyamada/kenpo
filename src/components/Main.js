require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import ChangeRow from './ChangeRow';
import { getChanges } from '../modules/changes/';

const mapStateToProps = (state) => ({
  isLoading: state.changes.isLoading,
  changes: state.changes.items
});

const mapDispatchToProps = (dispatch) => ({
  fetchChanges: () => dispatch(getChanges())
});

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.fetchChanges();
  }

  render = () => {
    return (
      <div className="container">
        {this.props.isLoading ? 'loading...' :
          <Grid>
            {this.props.changes
              ? Object.keys(this.props.changes).map(
                key => <ChangeRow key={key} change={this.props.changes[key]} />)
              : 'blah'}
          </Grid>}
      </div>
    );
  }
}

AppComponent.propTypes = {
  fetchChanges: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool,
  changes: React.PropTypes.objectOf(React.PropTypes.any)
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
