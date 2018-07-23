import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper,
    appComponent,
    button,
    counterDisplay;

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  return shallow(<App {...props} />);
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

beforeEach(() => {
  wrapper = setup();
  appComponent = findByTestAttr(wrapper, 'component-app');
  button = findByTestAttr(wrapper, 'increment-button');
  counterDisplay = findByTestAttr(wrapper, 'counter-display');
});

test('renders without crashing', () => {
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {

});

test('clicking button increments counter', () => {});
