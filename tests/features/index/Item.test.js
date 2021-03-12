import React from 'react';
import { shallow } from 'enzyme';
import { Item } from '../../../src/features/index';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Item />);
  expect(renderedComponent.find('.index-item').length).toBe(1);
});
