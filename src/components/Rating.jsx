import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Rating = (prop) => <span className="rating">{prop.rating}</span>;

Rating.PropTypes = { prop: PropTypes.number.isRequired };

export default Rating;
