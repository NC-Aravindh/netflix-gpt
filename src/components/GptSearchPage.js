import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";

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
      <GptMovieSuggestions GptMovieList={GptMovieList} />
    </div>
  );
};

export default GptSearchPage;
