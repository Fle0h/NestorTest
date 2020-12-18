import { should } from 'chai';
import newCustomerFormReducer, { initialState } from 'src/reducers/newCustomerForm';
import {
  CHANGE_INPUT_VALUE_CUSTOMER,
  changeInputValueCustomer,
} from 'src/actions/newCustomerForm';

should();

describe('REDUCER -> newCustomerForm', () => {
  describe('Structure', () => {
    it('should be a function', () => {
      newCustomerFormReducer.should.be.a('function');
    });
    it('should return initalState', () => {
      newCustomerFormReducer().should.be.equal(initialState);
    });
  });

  describe('Actions', () => {
    // Données de test
    const fakeTarget = 'name';
    const fakeInput = 'test';

    // Test changement de store pour les input du formulaire
    describe(CHANGE_INPUT_VALUE_CUSTOMER, () => {
      it('should change newCustomerForm state', () => {
        const action = changeInputValueCustomer(fakeTarget, fakeInput);

        newCustomerFormReducer(initialState, action).should.be.deep.eql(
          {
            ...initialState,
            [fakeTarget]: fakeInput,
          },
        );
      });
    });
  });
});
