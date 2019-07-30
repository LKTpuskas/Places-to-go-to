import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import './App.css';
import users from './sample-data/users.json'

// semantic-ui-react dropdown requires a key, text and value property.
// handling drinks( bad casing )
const mapUsers = () => users.map(user => ({
  key: user.name,
  text: user.name,
  value: user.name,
  wont_eat: user.wont_eat,
  drinks: capitalize(user.drinks)
}))

const capitalize = (drinks) => drinks.map(string => {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
})

class DropdownList extends React.Component {
  state = {
    value: []
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = () => {
    const { value } = this.state;
    const selectedUsers = mapUsers().filter(f => value.includes(f.text))
    const noGoFood = selectedUsers.map(item => item.wont_eat[0])
    const goodDrinks = selectedUsers.map(item => item.drinks[0])
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
          options={mapUsers()}
        />
        <Button onClick={this.handleSubmit}><span> Where to go ?</span></Button>
      </>
    );
  }
}

export default DropdownList;
