import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SingleRoom = ({ number, area, price }) => (
  <div className="singleApartment_room">
    <img className="singleApartment_room-image" src="https://en.jobs.game/images/template/no-logo.png" alt="Appartement" />
    <h2 className="singleApartment_room-text">Chambre N°{number}</h2>
    <h3 className="singleApartment_room-text">{area} m²</h3>
    <h3 className="singleApartment_room-text">{price} €</h3>
  </div>
);

SingleRoom.propTypes = {
  number: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default SingleRoom;
