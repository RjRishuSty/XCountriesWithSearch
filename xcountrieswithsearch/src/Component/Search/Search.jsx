import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import Styles from "./Search.module.css";
import { DataContext } from "../../Page/Home";

const Search = () => {
  const inputRef = useRef();
  const { cardData, setFilteredCardData } = useContext(DataContext);
  const [text, setText] = useState("");

  const inputRefHandler = () => {
    if (inputRef.current) {
      setText(inputRef.current.value);
    }
  };

  const filterSearchData = useCallback((text) => {
    const filterData = cardData.filter((item) =>
      item.name.common.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCardData(filterData);
  },[cardData, setFilteredCardData]);

  useEffect(() => {
    if (text === "") {
        setFilteredCardData(cardData);
    } else {
      const timeId = setTimeout(() => {
        filterSearchData(text);
      }, 500);
      return () => clearTimeout(timeId);
    }
  }, [text,cardData,filterSearchData,setFilteredCardData]);

  return (
    <input
      type="text"
      placeholder="Search for countries..."
      className={Styles.search}
      ref={inputRef}
      onChange={inputRefHandler}
    />
  );
};

export default Search;