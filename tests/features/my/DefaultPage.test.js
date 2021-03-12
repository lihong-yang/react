import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/my/DefaultPage';

describe('my/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      my: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.my-default-page').length
    ).toBe(1);
  });
});
