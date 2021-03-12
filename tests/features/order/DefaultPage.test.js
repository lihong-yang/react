import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/order/DefaultPage';

describe('order/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      order: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.order-default-page').length
    ).toBe(1);
  });
});
