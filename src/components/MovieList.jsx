import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

const aux = PropTypes.shape({ title: PropTypes.string });
MovieList.propTypes = { movies: PropTypes.arrayOf(aux).isRequired };

// MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
