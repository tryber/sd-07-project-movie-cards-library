import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img src={imagePath} alt="" />;
        <h4>{title}</h4>;
        <h5>{subtitle}</h5>;
        <p>{storyline}</p>;
      </div>
    );
  }
}

MovieCard.protoType = {
  movies: PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
})
};

export default MovieCard;
