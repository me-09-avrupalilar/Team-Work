import React from "react";
import { data } from "../helper/data";

const FilmYear = ({ data }) => {
  // js alani
  // console.log(data)
  return (
    // jsx alani
    <div>
      {data.map((item) => {
        return <ul>{item.date}</ul>;
      })}
    </div>
  );
};

export default FilmYear;
