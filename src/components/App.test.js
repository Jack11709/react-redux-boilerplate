/* global expect */
import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('should render correctly with given string', () => {
  const string = 'test';
  const component = shallow(<App title={string} />);
  expect(component).toMatchSnapshot();
});
