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
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setCardData(response.data);
      setFilteredCardData(response.data);
    } catch (error) {
      console.error(`Error fetching data:${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log("CardData", cardData);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <DataContext.Provider
      value={{ cardData, isLoading, setFilteredCardData, filteredCardData }}
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DataContext.Provider>
  );
}
export default App;
