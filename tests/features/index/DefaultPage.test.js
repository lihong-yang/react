import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/index/DefaultPage';

describe('index/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      index: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.index-default-page').length
    ).toBe(1);
  });
});
