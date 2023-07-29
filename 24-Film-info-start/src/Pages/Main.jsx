import React from "react";
import { data } from "../helper/data";
// import FilmInfo from "../components/FilmInfo";
import FilmYear from "../components/FilmYear";

const Main = () => {
  // console.log(data)
  return <FilmYear data={data} />;
};

export default Main;
