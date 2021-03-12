import React from 'react';
import { shallow } from 'enzyme';
import { TabBar } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TabBar />);
  expect(renderedComponent.find('.common-tab-bar').length).toBe(1);
});
