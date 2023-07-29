import React from "react";
import StarRating from "./StarRating";

const FilmInfo = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        const { id, title, body, tags, date, rate } = item;
        return (
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>{tags.join(", ")}</p>
            <p className="rate text-danger fs-4">
              {rate.toFixed(2)}
              {"/10"}
            </p>
            <StarRating rate={rate}/>
          </div>
          
        );
      })}
    </div>
  );
};

export default FilmInfo;
