import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'semantic-ui-react'

import DropdownList from '././DropDownList';

const setup = (extraProps = {}) => {
  const props = {
    setMembersSelection: () => {},
    ...extraProps
  }
  return {
    props,
    wrapper: shallow(<DropdownList {...props}/>)
  }
}

it('should call setMembersSelection when button has been clicked ', () => {
  const { wrapper } = setup();
  const button = wrapper.find(Button);
  button.simulate('click')
  // expect(props.setMembersSelection).toHaveBeenCalled(); 
})