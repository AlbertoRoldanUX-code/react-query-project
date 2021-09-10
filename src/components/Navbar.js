import React from 'react';

function Navbar({ setPage }) {
  function onClickPlanetsHandler() {
    setPage('planets');
  }
  function onClickPeopleHandler() {
    setPage('people');
  }

  return (
    <nav>
      <button onClick={onClickPlanetsHandler}>Planets</button>

      <button onClick={onClickPeopleHandler}>People</button>
    </nav>
  );
}

export default Navbar;
