import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import DropdownList from './DropDownList'

const setup = (extraProps = {}) => {
  const props = {
    ...extraProps
  }
  return {
    props,
    wrapper: shallow(<App {...props}/>)
  }
}

it('renders without crashing', () => {
  shallow(<App />);
});

describe('App', () => {
  it('should render a DropdownList ', () => {
    const { wrapper } = setup();
    const dropdownList = wrapper.find(DropdownList)
    expect(dropdownList.length).toBe(1);
  })
})

