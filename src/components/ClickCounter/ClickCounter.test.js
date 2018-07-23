import React from 'react';
import { shallow } from 'enzyme';
import ClickCounter from './ClickCounter';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ClickCounter />);
});

test('renders increment button', () => {
  expect(wrapper).toBeTruthy();
});

test('renders counter display', () => {});

test('counter starts at 0', () => {});

test('clicking button increments coutner', () => {});
