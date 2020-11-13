// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">{rating}</section>
    );
  }
}

Rating.PropTypes = {
  rating: PropTypes.number,
}

export default Rating;
