import React from 'react';
import PlanetItem from './PlanetItem';

function PlanetList({ planets }) {
  return (
    <div>
      {planets.map((planet, index) => (
        <PlanetItem
          name={planet.name}
          population={planet.population}
          key={index}
        />
      ))}
    </div>
  );
}

export default PlanetList;
