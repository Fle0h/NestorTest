import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai';

import Navigation from 'src/components/Navigation';

should();

describe('Composant -> Navigation', () => {
  const comp = shallow(<Navigation />);

  it('should be a function', () => {
    Navigation.should.be.a('function');
  });

  it('should have prop className', () => {
    comp.props().should.have.property('className');
  });
});
