import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const NewRoomForm = ({ changeInputValue, submitNewRoom, formValues }) => {
  const history = useHistory();

  const handleChangeInput = (event) => {
    changeInputValue(event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewRoom();
    history.goBack();
  };

  return (
    <div className="newRoomForm">
      <h2 className="newRoomForm-title">Créer un nouvel appartement</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>

        <div className="newRoomForm-input">
          <div className="ui input">
            <input
              name="number"
              id="number"
              type="number"
              required
              placeholder="Numéro de l'appartement"
              onChange={handleChangeInput}
              value={formValues.number}
            />
          </div>
        </div>

        <div className="newRoomForm-input">
          <div className="ui input">
            <input
              name="area"
              id="area"
              type="number"
              required
              placeholder="Surface"
              onChange={handleChangeInput}
              value={formValues.area}
            />
          </div>
        </div>

        <div className="newRoomForm-input">
          <div className="ui input">
            <input
              name="price"
              id="price"
              type="number"
              required
              placeholder="Prix"
              onChange={handleChangeInput}
              value={formValues.price}
            />
          </div>
        </div>

        <div className="newRoomForm-button">
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

NewRoomForm.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  submitNewRoom: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

export default NewRoomForm;
