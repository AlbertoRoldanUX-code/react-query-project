import React from 'react';
import { useQuery } from 'react-query';
import PeopleList from './PeopleList';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people');
  return res.json();
};

function People() {
  const { data, status } = useQuery('People', fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {status === 'error' && <p>There was an error, try again later.</p>}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'success' && <PeopleList people={data.results} />}
    </div>
  );
}

export default People;
