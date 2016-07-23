import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class ReactionBox extends React.Component {
  render() {
    return (
      <div>
        <Button><Glyphicon glyph="star" />大事！ {this.props.change.numLikes}</Button>
        <Button><Glyphicon glyph="comment" />コメント {this.props.change.numLikes}</Button>
      </div>
    );
  }
}

ReactionBox.propTypes = {
  change: React.PropTypes.any.isRequired
};

export default ReactionBox;
