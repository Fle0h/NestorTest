/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const NewBookingForm = ({
  changeInputValueBooking,
  changeInputValueApartmentBooking,
  submitNewBooking,
  formValues,
  customers,
  apartments,
}) => {
  const history = useHistory();

  const handleChangeInput = (event) => {
    changeInputValueBooking(event.target.name, event.target.value);
  };

  // Changer la liste de chambres pour l'appartement via un middleware
  const handleChangeInputApart = (event) => {
    changeInputValueApartmentBooking(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewBooking();
    history.goBack();
  };

  // Faire une map des clients pour le select
  const mapCustomers = customers.map((customer) => {
    return (
      <option value={customer.id}>{customer.firstName} {customer.lastName}</option>
    );
  });

  // Faire une map des appartements pour le select
  const mapApartments = apartments.map((apartment) => {
    return (
      <option value={apartment.id}>{apartment.name}</option>
    );
  });

  if (formValues.foundRooms !== '') {
    var mapRooms = formValues.foundRooms.map((room) => {
      return (
        <option value={room.id}>{room.number}</option>
      );
    });
  }

  return (
    <div className="newBookingForm">
      <h2 className="newBookingForm-title">Créer une nouvelle réservation</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>

        <select name="clientId" className="ui search dropdown" onChange={handleChangeInput}>
          <option value="">Client</option>
          {mapCustomers}
        </select>

        <select name="apartmentId" className="ui search dropdown" onChange={handleChangeInputApart}>
          <option value="">Appartement</option>
          {mapApartments}
        </select>

        <select name="roomId" className="ui search dropdown" onChange={handleChangeInput}>
          {mapRooms}
        </select>

        <div className="newBookingForm-button">
          <button
            type="submit"
            className="ui button"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

NewBookingForm.propTypes = {
  changeInputValueBooking: PropTypes.func.isRequired,
  changeInputValueApartmentBooking: PropTypes.func.isRequired,
  submitNewBooking: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  customers: PropTypes.array.isRequired,
  apartments: PropTypes.array.isRequired,
};

export default NewBookingForm;
