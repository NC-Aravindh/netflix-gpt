import React from "react";
import MovieCard from "./MovieCard";


const MovieListContainer = ({ title, movieList }) => {
  return (
    <div className="py-6 pl-12 text-white">
      <div className="py-2">
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
      <div className="flex gap-2">
        <div className="flex overflow-scroll gap-4">
          {movieList?.map((movie) => {
            
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
