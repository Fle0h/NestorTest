import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from 'src/components/App';

it('renders without crashing', () => {
  const mockStore = configureStore();
  const initialState = {
    apartments: [],
    customers: [],
    loading: true,
  };

  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  console.log(wrapper.debug());

  expect(wrapper.find('.app')).to.have.lengthOf(1);
});
