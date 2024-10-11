import React, { useContext } from "react";
import { Card } from "../Component/Card/Card";
import "../index.css";
import Navbar from "../Component/Navbar/Navbar";
import { DataContext } from "../App";
const Home = () => {
  const filteredCardData = useContext(DataContext);
  return (
    <div className="App">
      {console.log(filteredCardData)}
      {filteredCardData&&(
        <>
          <Navbar />
          <Card />
        </>
      )}
    </div>
  );
};

export default Home;
