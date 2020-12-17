import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const NewCustomerForm = ({ changeInputValueCustomer, submitNewCustomer, formValues }) => {
  const history = useHistory();

  const handleChangeInput = (event) => {
    changeInputValueCustomer(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewCustomer();
    history.goBack();
  };

  return (
    <div className="newCustomerForm">
      <h2 className="newCustomerForm-title">Créer un nouvel appartement</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>

        <div className="newCustomerForm-input">
          <div className="ui input">
            <input
              name="firstName"
              id="firstName"
              type="text"
              required
              placeholder="Prénom"
              onChange={handleChangeInput}
              value={formValues.firstName}
            />
          </div>
        </div>

        <div className="newCustomerForm-input">
          <div className="ui input">
            <input
              name="lastName"
              id="lastName"
              type="text"
              required
              placeholder="Nom"
              onChange={handleChangeInput}
              value={formValues.lastName}
            />
          </div>
        </div>

        <div className="newCustomerForm-input">
          <div className="ui input">
            <input
              name="email"
              id="email"
              type="mail"
              required
              placeholder="E-Mail"
              onChange={handleChangeInput}
              value={formValues.email}
            />
          </div>
        </div>

        <div className="newCustomerForm-input">
          <div className="ui input">
            <input
              name="phone"
              id="phone"
              type="number"
              required
              placeholder="Numéro de téléphone"
              onChange={handleChangeInput}
              value={formValues.phone}
            />
          </div>
        </div>

        <div className="newCustomerForm-input">
          <div className="ui input">
            <input
              name="nationality"
              id="nationality"
              type="text"
              required
              placeholder="Nationalité"
              onChange={handleChangeInput}
              value={formValues.nationality}
            />
          </div>
        </div>

        <div className="newCustomerForm-input">
          <div className="ui input">
            <input
              name="birthDate"
              id="birthDate"
              type="text"
              required
              placeholder="Date de naissance"
              onChange={handleChangeInput}
              value={formValues.birthDate}
            />
          </div>
        </div>

        <div className="newCustomerForm-button">
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

NewCustomerForm.propTypes = {
  changeInputValueCustomer: PropTypes.func.isRequired,
  submitNewCustomer: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

export default NewCustomerForm;
