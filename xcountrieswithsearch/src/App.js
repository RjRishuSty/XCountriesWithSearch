import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountries, setFilterCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setCountries(response.data);
      setFilterCountries(response.data); 
    } catch (error) {
      console.error("Failed to fetch the data ", error);
    }
  };

  const searchHandle = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

 
  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setFilterCountries(filtered);
  }, [searchTerm, countries]);

 
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <input
          type="text"
          placeholder="Search for countries..."
          value={searchTerm}
          onChange={searchHandle}
        />
      </nav>
      <div className="countryGrid">
        {filterCountries.length > 0 ? (
          filterCountries.map((country) => (
            <div className="countryCard" key={country.cca3}>
              <img src={country.flags.png} alt={country.name.common} />
              <h3>{country.name.common}</h3>
            </div>
          ))
        ) : (
         null
        )}
      </div>
    </div>
  );
};

export default App;
