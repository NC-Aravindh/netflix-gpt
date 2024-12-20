import React from "react";
import MovieCard from "./MovieCard";

const MovieListContainer = ({ title, movieList }) => {
  return (
    <div className="min-w-[550px]:pt-52 md:pt-0 pt-2 md:py-6 pl-4 md:pl-6 lg:pl-12 text-white">
      <div className="py-2">
        <h1 className="font-bold text-lg md:text-xl">{title}</h1>
      </div>
      <div className="flex gap-2">
        <div className="flex overflow-scroll scrollbar-hide gap-4">
          {movieList?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                rating={movie.vote_average}
                poster_path={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
