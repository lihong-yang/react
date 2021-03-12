import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/setting/DefaultPage';

describe('setting/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      setting: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.setting-default-page').length
    ).toBe(1);
  });
});
