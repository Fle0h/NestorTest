import { should } from 'chai';
import newRoomFormReducer, { initialState } from 'src/reducers/newRoomForm';
import {
  CHANGE_INPUT_VALUE_ROOM,
  changeInputValueRoom,
} from 'src/actions/newRoomForm';

should();

describe('REDUCER -> newRoomForm', () => {
  describe('Structure', () => {
    it('should be a function', () => {
      newRoomFormReducer.should.be.a('function');
    });
    it('should return initalState', () => {
      newRoomFormReducer().should.be.equal(initialState);
    });
  });

  describe('Actions', () => {
    // Données de test
    const fakeTarget = 'name';
    const fakeInput = 'test';

    // Test changement de store pour les input du formulaire
    describe(CHANGE_INPUT_VALUE_ROOM, () => {
      it('should change newRoomForm state', () => {
        const action = changeInputValueRoom(fakeTarget, fakeInput);

        newRoomFormReducer(initialState, action).should.be.deep.eql(
          {
            ...initialState,
            [fakeTarget]: fakeInput,
          },
        );
      });
    });
  });
});
