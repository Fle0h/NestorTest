import { should } from 'chai';
import appReducer, { initialState } from 'src/reducers/app';
import {
  SAVE_ALL_APARTMENTS,
  saveAllApartments,
  SAVE_ALL_CUSTOMERS,
  saveAllCustomers,
  SAVE_ALL_BOOKINGS,
  saveAllBookings,
  SAVE_ALL_ROOMS,
  saveAllRooms,
} from 'src/actions/app';

should();

describe('REDUCER -> app', () => {
  describe('Structure', () => {
    it('should be a function', () => {
      appReducer.should.be.a('function');
    });
    it('should return initalState', () => {
      appReducer().should.be.equal(initialState);
    });
  });

  describe('Actions', () => {
    // Données de test
    const fakeData = [{ a: 1, b: '2' }];

    // Test changement de store pour les Appartements
    describe(SAVE_ALL_APARTMENTS, () => {
      it('should change aparments', () => {
        const action = saveAllApartments(fakeData);

        appReducer(initialState, action).should.be.eql(
          {
            ...initialState,
            apartments: fakeData,
          },
        );
      });
    });

    // Test changement de store pour les CLients
    describe(SAVE_ALL_CUSTOMERS, () => {
      it('should change customers', () => {
        const action = saveAllCustomers(fakeData);

        appReducer(initialState, action).should.be.eql(
          {
            ...initialState,
            customers: fakeData,
          },
        );
      });
    });

    // Test changement de store pour les réservations
    describe(SAVE_ALL_BOOKINGS, () => {
      it('should change bookings', () => {
        const action = saveAllBookings(fakeData);

        appReducer(initialState, action).should.be.eql(
          {
            ...initialState,
            bookings: fakeData,
          },
        );
      });
    });

    // Test changement de store pour les chambres
    describe(SAVE_ALL_ROOMS, () => {
      it('should change rooms', () => {
        const action = saveAllRooms(fakeData);

        appReducer(initialState, action).should.be.eql(
          {
            ...initialState,
            rooms: fakeData,
          },
        );
      });
    });
  });
});
