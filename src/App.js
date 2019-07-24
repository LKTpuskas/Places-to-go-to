import React, { useState } from 'react';
import './App.css';
import DropdownList from './DropDownList'
import { venues } from './sample-data/venues'
import Venues from './Venues'

function App() {
  const [undesiredFood, setFood] = useState([])
  const [desiredDrinks, setDrinks] = useState([])

  const setMembersSelection = (food, drinks) => {
    setFood(food);
    setDrinks(drinks);
  }
  const placesToGoTo = () => {
    return venues.reduce((all, venue) => {
        const foodValid = venue.food.some(food => !undesiredFood.includes(food))
        const drinksValid = venue.drinks.some(drinks => desiredDrinks.includes(drinks))
        if (foodValid && drinksValid) {
          return [...all, venue]
        }
      return all
    },[])
  }

  const placesToAvoid = () => venues.filter(f => !placesToGoTo().includes(f));
  const isUserSelected = undesiredFood.length !== 0 || desiredDrinks.length !== 0;
  return (
    <div className="App">
      <DropdownList setMembersSelection={setMembersSelection}/>
      <Venues validVenues={placesToGoTo()} invalidVenues={placesToAvoid()} isUserSelected={isUserSelected}/>
    </div>
  );
}

export default App;
