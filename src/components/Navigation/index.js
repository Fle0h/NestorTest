import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Navigation = () => (
  <div className="navigation">
    <div className="ui three item menu">
      <NavLink to="/" className="item" activeClassName="item active" exact>
        Appartements
      </NavLink>
      <NavLink to="/clients" className="item" activeClassName="item active" exact>
        Clients
      </NavLink>
      <NavLink to="/reservation" className="item" activeClassName="item active" exact>
        Booking
      </NavLink>
    </div>
  </div>
);

export default Navigation;
