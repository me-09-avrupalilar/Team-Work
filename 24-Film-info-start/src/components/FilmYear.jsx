import React from "react";
import { data } from "../helper/data";

const FilmYear = ({ data }) => {
  // js alani
  // console.log(data)
  return (
    // jsx alani
    <div>
      {data.map((item) => {
        return (
          <button className="border-0 px-2 m-2 fs-4 fw-bold text-secondary">
            {item.date}
          </button>
        );
      })}
    </div>
  );
};

export default FilmYear;
