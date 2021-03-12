import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/detail/DefaultPage';

describe('detail/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      detail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.detail-default-page').length
    ).toBe(1);
  });
});
