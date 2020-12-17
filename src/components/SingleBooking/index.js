import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './style.scss';

const SingleBooking = ({ bookings }) => {
  const id = useParams();
  console.log(bookings);
  console.log(id);
  const foundBooking = bookings.find((booking) => (booking.id === id.slug));
  console.log(foundBooking);
  return (
    <div className="singleBooking">
      <h2 className="singleBooking-title">Réservation ID : {foundBooking.id}</h2>
      <h3 className="singleBooking-text">Client : {foundBooking.client.firstName} {foundBooking.client.lastName}</h3>
      <h3 className="singleBooking-text">Numéro : {foundBooking.client.phone}</h3>
      <div className="ui divider"> </div>
      <h3 className="singleBooking-text">Appartement : {foundBooking.room.apartment.name}</h3>
      <h3 className="singleBooking-text">Adresse : {foundBooking.room.apartment.number} {foundBooking.room.apartment.street} {foundBooking.room.apartment.zipcode}</h3>
      <h3 className="singleBooking-text">Chambre N°{foundBooking.room.number} de {foundBooking.room.area}m²</h3>
      <h3 className="singleBooking-text">Prix : {foundBooking.room.number} €</h3>
    </div>
  );
};

SingleBooking.propTypes = {
  bookings: PropTypes.array.isRequired,
};

export default SingleBooking;
