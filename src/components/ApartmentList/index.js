/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Apartment from './Apartment';

import './style.scss';

const ApartmentList = ({ getAllApartments, apartments }) => {
  useEffect(() => {
    getAllApartments();
  }, []);

  console.log(apartments);

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
    <div className="apartmentList">{apartmentsMap}</div>
  );
};

ApartmentList.propTypes = {
  getAllApartments: PropTypes.func.isRequired,
  apartments: PropTypes.array.isRequired,
};

export default ApartmentList;
