import React, { useContext } from "react";
import Styles from "./Card.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { DataContext } from "../../Page/Home";

export const Card = () => {
  const { filteredCardData, isLoading } = useContext(DataContext);
  console.log("inCard", filteredCardData);
  return (
    <div className={Styles.countryCard}>
      {console.log(filteredCardData, "inCard")}
      {!isLoading ? (
        filteredCardData.length > 0 ? (
          filteredCardData.map((item, index) => {
            return (
              <div className={Styles.card} key={index}>
                <img
                  className={Styles.img}
                  src={item.flags.svg}
                  alt={item.name.common} 
                />
                <h2>{item.name.common}</h2>
              </div>
            );
          })
        ) : (
          <div className="loader">
            <h2> Not Found</h2>
          </div>
        )
      ) : (
        <div className="loader">
          <CircularProgress color="primary" />
        </div>
      )}
    </div>
  );
};
