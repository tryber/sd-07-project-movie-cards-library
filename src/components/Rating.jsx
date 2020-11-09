import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const rating = this.props.rating;
    return <p className="rating">{rating}</p>;
  }
}
Rating.defaultProps = { rating: 1 };
Rating.propTypes = { rating: PropTypes.number };

export default Rating;
