import React from "react";
import { data } from "../helper/data";
// import FilmInfo from "../components/FilmInfo";
import FilmYear from "../components/FilmYear";

const Main = () => {
  // console.log(data)
  return (
    <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div">
      <FilmYear data={data} />
    </div>
  );
};

export default Main;
