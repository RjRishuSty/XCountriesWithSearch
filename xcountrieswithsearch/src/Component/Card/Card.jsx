import React, { useContext } from "react";
import Styles from "./Card.module.css";
import { DataContext } from "../../App";

export const Card = () => {
  const { filteredCardData } = useContext(DataContext);
  console.log("inCard", filteredCardData);
  return (
    <>
      {filteredCardData.length > 0 &&
        filteredCardData.map((item, index) => {
          return (
            <div className={Styles.countryCard} key={index}>
              <img
                className={Styles.img}
                src={item.flags.svg}
                alt={item.name.common}
              />
              <h2>{item.name.common}</h2>
            </div>
          );
        })}
    </>
  );
};
