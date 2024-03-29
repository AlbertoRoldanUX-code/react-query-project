import React from 'react';

function PlanetItem({ name, population, terrain }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
    </div>
  );
}

export default PlanetItem;
