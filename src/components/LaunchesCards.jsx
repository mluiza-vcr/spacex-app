import React from 'react';

function LaunchesCards() {
  const pathName = window.location.pathname.replace('/', '');

  const launch = JSON.parse(localStorage.getItem(pathName));

  return (
    <section className="main-launches">
      {launch.map(({ name, links, flight_number: flightNumber }) => (
        <>
          <h2>
            {name}
          </h2>
          <img src={links.patch.small} alt="Foguete" />
          <p>
            {flightNumber}
          </p>
        </>
      ))}
    </section>
  );
}

export default LaunchesCards;
