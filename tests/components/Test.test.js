import { expect } from 'chai';
import app from 'src/reducers/app';

describe('App Reducer', () => {
  it('Should handle INCREMENT', () => {
    const initialState = { count: 0 };

    const newState = app(initialState, { type: 'INCREMENT' });

    expect(newState).to.eql({
      count: 1,
    });
  });

  it('Should handle DECREMENT', () => {
    const initialState = { count: 1 };

    const newState = app(initialState, { type: 'DECREMENT' });

    expect(newState).to.eql({
      count: 0,
    });
  });
});
