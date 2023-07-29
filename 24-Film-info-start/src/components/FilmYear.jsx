import React from "react";
import { data } from "../helper/data";
import { useState } from "react";
import FilmInfo from "./FilmInfo";

const FilmYear = ({data}) => {

  
  // console.log(data);

  const handleClick = () => {};
  // js alani
  // console.log(data)
  return (
    // jsx alani
    <div>
      {data.map((item) => {
        
        return (
          <button
            onClick={handleClick}
            className="border-0 px-2 m-2 fs-4 fw-bold text-secondary"
          >
            {item.date}
          </button>
        );
      })}
      <FilmInfo data={data} />
    </div>
  );
};

export default FilmYear;
