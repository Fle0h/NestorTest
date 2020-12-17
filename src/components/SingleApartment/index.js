/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import SingleRoom from './SingleRoom';

import './style.scss';

const SingleApartment = ({ apartment }) => {
  const roomsMap = apartment.rooms.map((singleRoom) => {
    return (
      <SingleRoom
        key={singleRoom.number}
        number={singleRoom.number}
        area={singleRoom.area}
        price={singleRoom.price}
      />
    );
  });

  return (
    <div className="singleApartment">
      <img className="singleApartment-image" src="https://en.jobs.game/images/template/no-logo.png" alt="Appartement" />
      <h1 className="singleApartment-title">{apartment.name}</h1>
      <h2 className="singleApartment-subtitle">Chambres disponibles :</h2>
      <div className="singleApartment_rooms">
        {roomsMap}
      </div>
    </div>
  );
};

SingleApartment.propTypes = {
  apartment: PropTypes.object.isRequired,
};

export default SingleApartment;
