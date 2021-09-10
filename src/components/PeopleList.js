import React from 'react';
import PeopleItem from './PeopleItem';

function PeopleList({ people }) {
  return (
    <div>
      {people.map((people) => (
        <PeopleItem
          name={people.name}
          key={people.name}
          birthYear={people.birth_year}
          eyeColor={people.eye_color}
        />
      ))}
    </div>
  );
}

export default PeopleList;
