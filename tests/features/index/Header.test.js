import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/features/index';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Header />);
  expect(renderedComponent.find('.index-header').length).toBe(1);
});
