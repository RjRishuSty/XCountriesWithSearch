import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home countries={filterCountries} searchHandle={searchHandle} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
