import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { connect } from 'react-redux';
import { likeChange as likeChangeAction } from '../modules/changes';

const mapDispatchToProps = (dispatch) => ({
  likeChange: (changeId) => dispatch(likeChangeAction(changeId))
});

class ReactionBox extends React.Component {
  onLike = () => {
    this.props.likeChange(this.props.change.id);
  };

  render() {
    return (
      <div>
        <Button
          disabled={this.props.change.isLiking || this.props.change.liked}
          onClick={this.onLike}
        >
          <Glyphicon glyph="star" />大事！ {this.props.change.likecount}
        </Button>
        <Button><Glyphicon glyph="comment" />コメント </Button>
      </div>
    );
  }
}

ReactionBox.propTypes = {
  change: React.PropTypes.any.isRequired,
  likeChange: React.PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ReactionBox);
