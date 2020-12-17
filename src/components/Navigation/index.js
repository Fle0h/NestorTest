import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Navigation = () => (
  <div className="navigation">
    <div className="ui three item menu">
      <NavLink to="/" className="item" activeClassName="item active" exact>
        Appartements
      </NavLink>
      <NavLink to="/customers" className="item" activeClassName="item active">
        Clients
      </NavLink>
      <NavLink to="/bookings" className="item" activeClassName="item active">
        Booking
      </NavLink>
    </div>
  </div>
);

export default Navigation;
