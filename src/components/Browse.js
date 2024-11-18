import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import FirstContainer from "./FirstContainer";
import SecondContainer from './SecondContainer'
const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <FirstContainer/>
      <SecondContainer/>
    </div>
  );
};

export default Browse;
