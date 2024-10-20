
import React from "react";

const Home = ({ countries, searchHandle }) => {
  return (
    <div className="Home">
      <nav className="navbar">
        <input
          type="text"
          placeholder="Search for countries..."
          onChange={searchHandle}
        />
      </nav>
      <div className="countryGrid">
        {countries.length > 0 ? (
          countries.map((country) => (
            <div className="countryCard" key={country.cca3}>
              <img src={country.flags.png} alt={country.name.common} />
              <h2>{country.name.common}</h2>
            </div>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
