import React, { useEffect, useState } from "react";
import { Card } from "../Component/Card/Card";
import "../index.css";
import Navbar from "../Component/Navbar/Navbar";
import axios from "axios";
import { createContext } from "react";
export const DataContext = createContext();

const Home = () => {
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

  console.log("CardData", cardData);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <DataContext.Provider value={{ cardData, isLoading, setFilteredCardData,filteredCardData }}>
        <Navbar />
        <Card />
      </DataContext.Provider>
    </div>
  );
};

export default Home;