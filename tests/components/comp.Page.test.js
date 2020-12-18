/* eslint-disable react/no-children-prop */
import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai';

import Page from 'src/components/Page';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import ApartmentList from 'src/components/ApartmentList';

should();

describe('Composant -> Page', () => {
  // Données de test
  const fakeProps = {
    ApartmentList,
  };

  // Composant Page
  const wrapper = shallow(<Page children={fakeProps} />);

  describe('STRUCTURE', () => {
    it('should be an object', () => {
      wrapper.should.be.a('object');
    });

    it('should have prop className', () => {
      wrapper.props().should.have.property('className');
    });
  });

  describe('CHILD COMPONENTS', () => {
    it('Render Child <Header/>', () => {
      wrapper.find(Header).should.have.lengthOf(1);
    });
    it('Render Child <Navigation/>', () => {
      wrapper.find(Navigation).should.have.lengthOf(1);
    });
  });
});
