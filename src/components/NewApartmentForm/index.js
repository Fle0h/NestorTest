import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const NewApartmentForm = ({ changeInputValue, submitNewApartment, formValues }) => {
  const history = useHistory();

  const handleChangeInput = (event) => {
    changeInputValue(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewApartment();
    history.goBack();
  };

  return (
    <div className="newApartmentForm">
      <h2 className="newApartmentForm-title">Créer un nouvel appartement</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>

        <div className="newApartmentForm-input">
          <div className="ui input">
            <input
              name="name"
              id="name"
              type="text"
              required
              placeholder="Nom de l'appartement"
              onChange={handleChangeInput}
              value={formValues.name}
            />
          </div>
        </div>

        <div className="newApartmentForm-input">
          <div className="ui input">
            <input
              name="number"
              id="number"
              type="number"
              required
              placeholder="Numéro de rue"
              onChange={handleChangeInput}
              value={formValues.number}
            />
          </div>
        </div>

        <div className="newApartmentForm-input">
          <div className="ui input">
            <input
              name="street"
              id="street"
              type="text"
              required
              placeholder="Nom de rue"
              onChange={handleChangeInput}
              value={formValues.street}
            />
          </div>
        </div>

        <div className="newApartmentForm-input">
          <div className="ui input">
            <input
              name="zipcode"
              id="zipcode"
              type="number"
              required
              placeholder="Code postal"
              onChange={handleChangeInput}
              value={formValues.zipcode}
            />
          </div>
        </div>

        <div className="newApartmentForm-button">
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

NewApartmentForm.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  submitNewApartment: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

export default NewApartmentForm;
