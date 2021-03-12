import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/features/cart';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Header />);
  expect(renderedComponent.find('.cart-header').length).toBe(1);
});
