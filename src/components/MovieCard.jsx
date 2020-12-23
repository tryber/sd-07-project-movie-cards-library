import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movieInfo;
    console.log(title);
    return (
      <div>
        <img alt={title} src={imagePath} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.objectOf(PropTypes.shape({
    storyline: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieCard;
