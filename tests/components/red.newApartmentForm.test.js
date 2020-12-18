import { should } from 'chai';
import newApartmentFormReducer, { initialState } from 'src/reducers/newApartmentForm';
import {
  CHANGE_INPUT_VALUE_APARTMENT,
  changeInputValueApartment,
} from 'src/actions/newApartmentForm';

should();

describe('REDUCER -> newApartmentForm', () => {
  describe('Structure', () => {
    it('should be a function', () => {
      newApartmentFormReducer.should.be.a('function');
    });
    it('should return initalState', () => {
      newApartmentFormReducer().should.be.equal(initialState);
    });
  });

  describe('Actions', () => {
    // Données de test
    const fakeTarget = 'name';
    const fakeInput = 'test';

    // Test changement de store pour les input du formulaire
    describe(CHANGE_INPUT_VALUE_APARTMENT, () => {
      it('should change newApartmentForm state', () => {
        const action = changeInputValueApartment(fakeTarget, fakeInput);

        newApartmentFormReducer(initialState, action).should.be.deep.eql(
          {
            ...initialState,
            [fakeTarget]: fakeInput,
          },
        );
      });
    });
  });
});
