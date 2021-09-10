import React from 'react';

function PeopleItem({ name, birthYear, eyeColor }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>Birth year: {birthYear}</p>
      <p>Eye color: {eyeColor}</p>
    </div>
  );
}

export default PeopleItem;
