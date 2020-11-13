// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
}

export default MovieList;
