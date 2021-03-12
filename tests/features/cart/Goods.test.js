import React from 'react';
import { shallow } from 'enzyme';
import { Goods } from '../../../src/features/cart';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Goods />);
  expect(renderedComponent.find('.cart-goods').length).toBe(1);
});
