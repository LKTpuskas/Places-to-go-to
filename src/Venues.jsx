import React from 'react';

const Venues = ({ validVenues, invalidVenues, isUserSelected }) => (
  <>
    <h2>Places to go to</h2>
    {validVenues.map((venue, index) => (
      <ul className='venues' key={index}>
        <li>{venue.name}</li>
      </ul>
    ))}
    <h2>Places to avoid</h2>
    {isUserSelected && invalidVenues.map((venue, index) => (
      <ul className='venues' key={index}>
        <li>{venue.name}</li>
      </ul>
    ))}
  </>
)

export default Venues;
