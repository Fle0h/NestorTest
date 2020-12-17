import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './style.scss';

const SingleCustomer = ({ customers }) => {
  const id = useParams();
  const foundCustomer = customers.find((customer) => (customer.id === id.slug));
  console.log(foundCustomer);
  return (
    <div className="singleCustomer">
      <h2 className="singleCustomer-title">Fiche Client ID : {foundCustomer.id}</h2>
      <h3 className="singleCustomer-text">Nom : {foundCustomer.firstName} {foundCustomer.lastName}</h3>
      <h3 className="singleCustomer-text">Téléphone : {foundCustomer.phone}</h3>
      <h3 className="singleCustomer-text">Date de naissance : {foundCustomer.birthDate}</h3>
      <h3 className="singleCustomer-text">Nationalité : {foundCustomer.nationality}</h3>
    </div>
  );
};

SingleCustomer.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default SingleCustomer;
