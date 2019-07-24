import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import './App.css';
import { users } from './sample-data/users'

const convertUsers = (users) => {
  return users.reduce((all, user) => {
    const convertedUser = {
      key: user.name,
      text: user.name,
      value: user.name,
      wont_eat: user.wont_eat,
      drinks: user.drinks
    }
    return [...all, convertedUser]
  }, [])
}

class DropdownList extends React.Component {
  state = {
    value: []
  }

  handleChange = (e, { value }) => {
    this.setState({
      value
    })
  }

  handleSubmit = () => {
    const { value } = this.state;
    const selectedUsers = convertUsers(users).filter(f => value.includes(f.text) )
    const noGoFood = selectedUsers.reduce((all, item) => [...all, ...item.wont_eat ],[])
    const goodDrinks = selectedUsers.reduce((all, item) => [...all, ...item.drinks ],[])
    this.props.setMembersSelection(noGoFood, goodDrinks);
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <Dropdown
          placeholder='Select a team member'
          className='dropdown'
          fluid
          onChange={this.handleChange}
          value={value}
          selection
          multiple
          options={convertUsers(users)}
        />
        <Button onClick={this.handleSubmit}><span> Where to go ?</span></Button>
      </>
    );
  }
}

export default DropdownList;
