import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai';

import App from 'src/components/App';
import Page from 'src/components/Page';
import ApartmentList from 'src/containers/ApartmentList';
import SingleApartment from 'src/containers/SingleApartment';
import NewApartmentForm from 'src/containers/NewApartmentForm';
import NewRoomForm from 'src/containers/NewRoomForm';
import CustomerList from 'src/components/CustomerList';
import SingleCustomer from 'src/components/SingleCustomer';
import NewCustomerForm from 'src/containers/NewCustomerForm';
import BookingList from 'src/components/BookingList';
import SingleBooking from 'src/components/SingleBooking';
import NewBookingForm from 'src/containers/NewBookingForm';

should();

describe('Composant -> App', () => {
  // Données de test
  const fakeApartments = [{
    id: '1',
    number: '2',
    name: '3',
    street: 4,
    zipCode: 5,
    rooms: [],
  }];
  // Compteur du nombre de pages générées
  let pageCount = 0;

  // Composant App
  const wrapper = shallow(<App apartments={fakeApartments} />);

  describe('STRUCTURE', () => {
    it('should be an object', () => {
      wrapper.should.be.a('object');
    });

    it('should have prop className', () => {
      wrapper.props().should.have.property('className');
    });
  });

  describe('CHILD COMPONENTS', () => {
    it('Render Child <ApartmentList/>', () => {
      wrapper.find(ApartmentList).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <CustomerList/>', () => {
      wrapper.find(CustomerList).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <BookingList/>', () => {
      wrapper.find(BookingList).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <SingleApartment/>', () => {
      wrapper.find(SingleApartment).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <SingleCustomer/>', () => {
      wrapper.find(SingleCustomer).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <SingleBooking/>', () => {
      wrapper.find(SingleBooking).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <NewApartmentForm/>', () => {
      wrapper.find(NewApartmentForm).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <NewRoomForm/>', () => {
      wrapper.find(NewRoomForm).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <NewCustomerForm/>', () => {
      wrapper.find(NewCustomerForm).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Child <NewBookingForm/>', () => {
      wrapper.find(NewBookingForm).should.have.lengthOf(1);
      pageCount += 1;
    });
    it('Render Multiples Childs <Page/>', () => {
      wrapper.find(Page).should.have.lengthOf(pageCount);
    });
  });
});
