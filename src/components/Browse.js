import React from "react";
import Header from "./Header";
import useMovieLists from "../utils/useMovieLists";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
const Browse = () => {
  useMovieLists("now_playing");
  useMovieLists("upcoming");
  useMovieLists("top_rated");
  useMovieLists("popular");

  const isGptSearchEnabled = useSelector((store) => store.gpt.enableGptSearch);

  return (
    <div>
      <Header />
      {isGptSearchEnabled ? (
        <GptSearchPage />
      ) : (
        <>
          <FirstContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
