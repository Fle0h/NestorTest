import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai';
import App from "src/components/App";

should();

describe('Composant Source -> App', () => {
  const comp = shallow(<App />);

  it('should be a function', () => {
    App.should.be.a('function');
  });

  it('should have prop className', () => {
    comp.props().should.have.property('className');
  });
});
