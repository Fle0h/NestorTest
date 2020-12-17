/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SingleRoom from './SingleRoom';

import './style.scss';

const SingleApartment = ({ changeApartmentID, apartment }) => {
  // Changement de l'ID pour la création d'une nouvelle room
  const handleChangeApartmentID = (id) => {
    changeApartmentID(id);
  };

  // Création des Chambres
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
      {/* Appartement */}
      <img className="singleApartment-image" src="https://en.jobs.game/images/template/no-logo.png" alt="Appartement" />
      <h1 className="singleApartment-title">{apartment.name}</h1>
      <h2 className="singleApartment-title">{apartment.number} {apartment.street} {apartment.zipcode}</h2>

      <div className="ui divider"> </div>

      {/* Chambres */}
      <h2 className="singleApartment-subtitle">Chambres disponibles :</h2>

      <div className="apartmentList-button-new">
        <Link onClick={handleChangeApartmentID(apartment.id)} className="ui button" to="/new-room">
          Créer une nouvelle chambre
        </Link>
      </div>

      <div className="singleApartment_rooms">
        {roomsMap}
      </div>
    </div>
  );
};

SingleApartment.propTypes = {
  changeApartmentID: PropTypes.func.isRequired,
  apartment: PropTypes.object.isRequired,
};

export default SingleApartment;
