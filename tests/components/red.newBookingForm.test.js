import { should } from 'chai';
import newBookingFormReducer, { initialState } from 'src/reducers/newBookingForm';
import {
  CHANGE_INPUT_VALUE_BOOKING,
  changeInputValueBooking,
} from 'src/actions/newBookingForm';

should();

describe('REDUCER -> newBookingForm', () => {
  describe('Structure', () => {
    it('should be a function', () => {
      newBookingFormReducer.should.be.a('function');
    });
    it('should return initalState', () => {
      newBookingFormReducer().should.be.equal(initialState);
    });
  });

  describe('Actions', () => {
    // Données de test
    const fakeTarget = 'name';
    const fakeInput = 'test';

    // Test changement de store pour les input du formulaire
    describe(CHANGE_INPUT_VALUE_BOOKING, () => {
      it('should change newBookingForm state', () => {
        const action = changeInputValueBooking(fakeTarget, fakeInput);

        newBookingFormReducer(initialState, action).should.be.deep.eql(
          {
            ...initialState,
            [fakeTarget]: fakeInput,
          },
        );
      });
    });
  });
});
