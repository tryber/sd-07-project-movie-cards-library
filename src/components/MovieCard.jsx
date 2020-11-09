// implement MovieCard component here
import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={this.props.movie.imagePath}
          alt=""
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{this.props.movie.title}</h4>
          <h5 className="movie-card-subtitle">{this.props.movie.subtitle}</h5>
          <p className="movie-card-storyline">{this.props.movie.storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={this.props.movie.rating} />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
