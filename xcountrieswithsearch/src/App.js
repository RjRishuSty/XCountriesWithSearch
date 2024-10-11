import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import axios from "axios";
import { createContext } from "react";
export const DataContext = createContext();

function App() {
  const [cardData, setCardData] = useState([]);
  const [filteredCardData, setFilteredCardData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setCardData(response.data);
      setFilteredCardData(response.data);
    } catch (error) {
      console.error(`Error fetching data:${error}`);
    }
  };

  // console.log("CardData", cardData);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <DataContext.Provider
      value={{ cardData, setFilteredCardData, filteredCardData }}
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DataContext.Provider>
  );
}
export default App;
