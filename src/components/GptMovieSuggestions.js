import React from "react";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = ({ GptMovieList }) => {
  if (!GptMovieList) return null;
  return (
    <div className="mt-4 flex bg-black max-512:gap-4  max-767:gap-8 md:gap-10 p-4 flex-wrap">
      {GptMovieList.map((movieList) => {
        return (movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            overview={movie.overview}
            rating={movie.vote_average}
            poster_path={movie.poster_path}
          />
        )));
      })}
    </div>
  );
};

export default GptMovieSuggestions;
