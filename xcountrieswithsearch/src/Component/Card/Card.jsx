import React, { useContext } from "react";
import Styles from "./Card.module.css";
import { DataContext } from "../../Page/Home";

export const Card = () => {
  const { filteredCardData } = useContext(DataContext);
  return (
    <>
      {filteredCardData.map((item, index) => {
        return (
          <div className={Styles.countryCard} key={index}>
            <img
              className={Styles.imges}
              src={item.flags.svg}
              alt={item.region}
            />
            <h2>{item.name.common}</h2> 
          </div>
        );
      })}
    </>
  );
};
