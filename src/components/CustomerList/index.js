/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'react-slugify';

import './style.scss';

const CustomerList = ({ customers }) => {
  const customersMap = customers.map((customer) => {
    return (
      <div key={customer.id} className="customerList_cell">
        <Link to={`/customers/${slugify(customer.id)}`}>
          <h2 className="customerList_cell-fullName">{customer.firstName} {customer.lastName}</h2>
        </Link>
      </div>
    );
  });

  return (
    <div className="customerList">
      <div className="customerList-buttons">
        <div className="customerList-button-new">
          <Link className="ui button" to="/new-customer">
            Créer un nouveau client
          </Link>
        </div>
      </div>
      <div className="customerList_customers">{customersMap}</div>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomerList;
