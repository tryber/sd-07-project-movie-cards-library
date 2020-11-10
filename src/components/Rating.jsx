import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
      const rating = this.props.rating;
    return (
        <span>
            {rating}
        </span>
    );
  }
}

Rating.propTypes = { rating: PropTypes.string };

export default Rating;
