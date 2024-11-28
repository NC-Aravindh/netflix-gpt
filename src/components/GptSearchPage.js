import React from "react";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";

const GptMovieSuggestions = lazy(() => import("./GptMovieSuggestions"));

const GptSearchPage = () => {
  const GptMovieList = useSelector((store) => store.gpt.gptMovieResults);
  return (
    <div>
      <img
        className="w-full h-auto -z-20 absolute"
        src={LOGIN_BG_URL}
        alt="login-bg-img"
      ></img>
      <GptSearchBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <GptMovieSuggestions GptMovieList={GptMovieList} />
      </Suspense>
    </div>
  );
};

export default GptSearchPage;
