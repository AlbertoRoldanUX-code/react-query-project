import React from 'react';
import { useQuery } from 'react-query';
import PlanetList from './PlanetList';

const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets');
  return res.json();
};

function Planets() {
  const { data, status } = useQuery('planets', fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>
      {status === 'error' && <p>There was an error, try again later.</p>}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'success' && <PlanetList planets={data.results} />}
    </div>
  );
}

export default Planets;
