/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Apartment from './Apartment';

import './style.scss';

const ApartmentList = ({ apartments }) => {
  const apartmentsMap = apartments.map((singleApartment) => {
    return (
      <Apartment
        key={singleApartment.id}
        name={singleApartment.name}
        streetNumber={singleApartment.number}
        streetName={singleApartment.street}
        slug={singleApartment.name}
      />
    );
  });

  return (
    <div className="apartments">
      <div className="apartmentList-buttons">
        <div className="apartmentList-button-new">
          <Link className="ui button" to="/new-apartment">
            Créer un nouvel appartement
          </Link>
        </div>
      </div>
      <div className="apartmentList">{apartmentsMap}</div>
    </div>
  );
};

ApartmentList.propTypes = {
  apartments: PropTypes.array.isRequired,
};

export default ApartmentList;
