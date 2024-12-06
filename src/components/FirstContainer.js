import React from "react";
import TrailerTitle from "./TrailerTitle";
import TrailerBackground from "./TrailerBackground";
import { useSelector } from "react-redux";

const FirstContainer = () => {
  const movieList = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movieList) return;
  const trailerMovie = movieList[4];

  return (
    <div>
      <TrailerTitle
        title={trailerMovie?.original_title}
        description={trailerMovie?.overview}
      />
      <TrailerBackground movieId={trailerMovie.id} />
    </div>
  );
};

export default FirstContainer;
