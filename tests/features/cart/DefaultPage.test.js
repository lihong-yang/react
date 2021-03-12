import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/cart/DefaultPage';

describe('cart/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      cart: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.cart-default-page').length
    ).toBe(1);
  });
});
