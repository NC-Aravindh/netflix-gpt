import React from "react";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import MoviePage from "./MoviePage";

const GptMovieSuggestions = lazy(() => import("./GptMovieSuggestions"));

const GptSearchPage = () => {
  const GptMovieList = useSelector((store) => store.gpt.gptMovieResults);
  const moviePage = useSelector((store) => store.movie.moviePage);
  const { title, rating, movieId, overview } = moviePage;
  return (
    <div>
      <div className="h-screen">
        <img
          className="object-cover w-full h-full -z-20 absolute"
          src={LOGIN_BG_URL}
          alt="login-bg-img"
        ></img>
        <GptSearchBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <GptMovieSuggestions GptMovieList={GptMovieList} />
        </Suspense>
      </div>
      {moviePage.isClicked && (
        <MoviePage
          movieId={movieId}
          title={title}
          overview={overview}
          rating={rating}
        />
      )}
    </div>
  );
};

export default GptSearchPage;
