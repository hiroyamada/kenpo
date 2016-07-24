import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { connect } from 'react-redux';
import {
  fbLogin as fbLoginAction,
  fbLogout as fbLogoutAction
} from '../modules/login';

const mapStateToProps = (state) => ({
  fbAccessToken: state.login.fbAccessToken,
  fbLoggingIn: state.login.fbLoggingIn
});

const mapDispatchToProps = (dispatch) => ({
  fbLogin: () => dispatch(fbLoginAction()),
  fbLogout: () => dispatch(fbLogoutAction())
});

class UserBox extends React.Component {
  clickLogin = () => {
    this.props.fbLogin();
  };

  clickLogout = () => {
    this.props.fbLogout();
  };

  render() {
    return (
      <div>
      {
        this.props.fbAccessToken ?
          <Button
            onClick={this.clickLogout}
            disabled={this.props.fbLoggingOut}
          >
            ログアウト
          </Button> :
          <Button
            onClick={this.clickLogin}
            disabled={this.props.fbLoggingIn}
          >
            <Glyphicon glyph="facebook" />ログイン
          </Button>
      }
      </div>
    );
  }
}

UserBox.propTypes = {
  fbLogin: React.PropTypes.func.isRequired,
  fbLogout: React.PropTypes.func.isRequired,
  fbAccessToken: React.PropTypes.string,
  fbLoggingIn: React.PropTypes.bool.isRequired,
  fbLoggingOut: React.PropTypes.bool.isRequired,
  fbGetStatus: React.PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBox);
