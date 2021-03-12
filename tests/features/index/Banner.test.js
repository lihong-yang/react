import React from 'react';
import { shallow } from 'enzyme';
import { Banner } from '../../../src/features/index';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Banner />);
  expect(renderedComponent.find('.index-banner').length).toBe(1);
});
