import { should } from 'chai';
import appReducer, { initialState } from 'src/reducers/app';
import { SAVE_ALL_APARTMENTS, saveAllApartments } from 'src/actions/app';

should();

describe('App Reducer', () => {
  describe('Structure', () => {
    it('should be a function', () => {
      appReducer.should.be.a('function');
    });
    it('should return initalState', () => {
      appReducer().should.be.equal(initialState);
    });
  });

  describe('Actions', () => {
    describe(SAVE_ALL_APARTMENTS, () => {
      it('should change the state', () => {
        const fakeData = [{ a: 1, b: 1 }, { a: 1, b: 2 }];
        // on construit l'action avec ces fausses données
        const action = saveAllApartments(fakeData);
        appReducer(initialState, action).should.be.eql(`apartments:${[fakeData]}`);
      });
    });
  });
});
