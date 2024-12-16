import React from "react";
import MovieListContainer from "./MovieListContainer";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  //get the upcoming movies using API --> fetch the ids ---> fetch the images
  const upComingMovieList = useSelector((store) => store.movie?.upComingMovies);
  const nowPlayingMovieList = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  const topRatedMovieList = useSelector((store) => store.movie?.topRatedMovies);
  const popularMovieList = useSelector((store) => store.movie?.popularMovies);

  return (
    <div className=" md:mt-0 bg-black w-full">
      <div className=" md:-mt-6 lg:-mt-24 xl:-mt-56 max-512:pt-80 md:relative z-30">
        {upComingMovieList && (
          <MovieListContainer
            title="Upcoming Movies"
            movieList={upComingMovieList}
          />
        )}
        {nowPlayingMovieList && (
          <MovieListContainer
            title="Now Playing"
            movieList={nowPlayingMovieList}
          />
        )}
        {topRatedMovieList && (
          <MovieListContainer title="Top-Rated" movieList={topRatedMovieList} />
        )}
        {popularMovieList && (
          <MovieListContainer
            title="Popular Movies"
            movieList={popularMovieList}
          />
        )}
      </div>
    </div>
  );
};

export default SecondContainer;
