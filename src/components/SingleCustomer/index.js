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
      <h2 className="singleCustomer-title">{foundCustomer.firstName} {foundCustomer.lastName}</h2>
      <h3 className="singleCustomer-text">{foundCustomer.phone}</h3>
      <h3 className="singleCustomer-text">{foundCustomer.birthDate}</h3>
      <h3 className="singleCustomer-text">{foundCustomer.nationality}</h3>
    </div>
  );
};

SingleCustomer.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default SingleCustomer;
