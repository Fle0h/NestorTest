import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SingleRoom = ({ number, area, price }) => (
  <div className="singleApartment_room">
    <img className="singleApartment_room-image" src="https://en.jobs.game/images/template/no-logo.png" alt="Appartement" />
    <h2 className="singleApartment_room-title">{number}</h2>
    <h3 className="singleApartment_room-title">{area}</h3>
    <h4 className="singleApartment_room-title">{price} €</h4>
  </div>
);

SingleRoom.propTypes = {
  number: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default SingleRoom;
