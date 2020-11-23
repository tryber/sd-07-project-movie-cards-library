import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    return (<div className="rating">{this.props.rating}</div>);
  }
}

export default Rating;

Rating.defaultProps = { rating: 0 };
Rating.propTypes = { rating: PropTypes.number.isRequired };
