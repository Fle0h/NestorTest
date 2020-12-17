import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slugify } from 'slugify';

import './style.scss';

const Apartment = ({
  name,
  streetNumber,
  streetName,
  slug,
}) => (
  <div className="apartmentList__apartment">
    <Link to={`/apartment/${slugify(slug)}`}>
      <img className="apartmentList__apartment-image" src="https://en.jobs.game/images/template/no-logo.png" alt="Appartement" />
      <h2 className="apartmentList__apartment-title">{name}</h2>
      <h3 className="apartmentList__apartment-subtitle">{streetNumber} {streetName}</h3>
    </Link>
  </div>
);

Apartment.propTypes = {
  name: PropTypes.string.isRequired,
  streetNumber: PropTypes.string.isRequired,
  streetName: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

Apartment.defaultProps = {
  streetName: '',
};

export default Apartment;
