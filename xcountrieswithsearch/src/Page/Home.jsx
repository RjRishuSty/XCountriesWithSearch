import React from "react";
import { Card } from "../Component/Card/Card";
import "../index.css";
import Navbar from "../Component/Navbar/Navbar";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
};

export default Home;
