import React from "react";
import { data } from "../helper/data";

import FilmYear from "../components/FilmYear";
// import FilmInfo from "../components/FilmInfo";


const Main = () => {
  return (
    <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div">
      <FilmYear data={data} />
      {/* <FilmInfo data={data} /> */}
    </div>
  );
};

export default Main;
