import React from "react";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = ({ GptMovieList }) => {
  if (!GptMovieList) return null;
  return (
    <div className="mt-4 flex bg-black gap-10 p-4 flex-wrap">
      {GptMovieList.map((movieList) => {
        return (movieList.map((movie) => (
          <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
        )))
      })}
    </div>
  );
};

export default GptMovieSuggestions;
