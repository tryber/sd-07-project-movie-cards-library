import React, { Component } from 'react';
import MovieCard from './MovieCard';
class MovieList extends Component {
	render() {
		return this.props.movies.map(movie => (
			<MovieCard movie={movie} key={movie.title} />
		));
	}
}

export default MovieList;
