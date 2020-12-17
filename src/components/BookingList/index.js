/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'react-slugify';

import './style.scss';

const BookingList = ({ bookings }) => {
  const bookingsMap = bookings.map((booking) => {
    return (
      <div key={booking.id} className="bookingList_cell">
        <Link to={`/bookings/${slugify(booking.id)}`}>
          <h2 className="bookingList_cell-fullName">{booking.client.firstName} {booking.client.lastName}</h2>
          <h2 className="bookingList_cell-infos">Appartement : {booking.room.apartment.name} - Chambre N°{booking.room.number}</h2>
        </Link>
      </div>
    );
  });

  return (
    <div className="bookingList">
      <div className="bookingList-buttons">
        <div className="bookingList-button-new">
          <Link className="ui button" to="/new-booking">
            Créer une nouvelle réservation
          </Link>
        </div>
      </div>
      <div className="bookingList_bookings">{bookingsMap}</div>
    </div>
  );
};

BookingList.propTypes = {
  bookings: PropTypes.array.isRequired,
};

export default BookingList;
