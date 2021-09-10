import React from 'react';

function PlanetItem({ name, population }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{population}</h2>
    </div>
  );
}

export default PlanetItem;
