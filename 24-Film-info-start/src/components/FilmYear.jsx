import React from "react";
import { data } from "../helper/data";
import { useState } from "react";
import FilmInfo from "./FilmInfo";

const FilmYear = ({ data }) => {
  const [year, setYear] = useState(true);
  const handleClick = () => {
    setYear(!year);
  };
  // js alani

  return (
    // jsx alani
    <div>
      {data.map((item) => {
        return (
          <button
            key={item.id}
            onClick={handleClick}
            className="border-0 px-2 m-2 fs-4 fw-bold text-secondary"
          >
            {item.date}
          </button>
        );
      })}
      {year ? <FilmInfo data={data} /> : year}
    </div>
  );
};

export default FilmYear;
