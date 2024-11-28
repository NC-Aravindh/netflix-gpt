import React from "react";
import Header from "./Header";
import useMovieLists from "../utils/useMovieLists";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import MoviePage from "./MoviePage";

const GptSearchPage = lazy(() => import("./GptSearchPage"));
const Browse = () => {
  const moviePage = useSelector((store) => store.movie.moviePage);
  const { title, rating, movieId, overview } = moviePage;
  useMovieLists("now_playing");
  useMovieLists("upcoming");
  useMovieLists("top_rated");
  useMovieLists("popular");

  const isGptSearchEnabled = useSelector((store) => store.gpt.enableGptSearch);

  return (
    <div className="box-border">
      <Header />
      {isGptSearchEnabled ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <GptSearchPage />
        </Suspense>
      ) : (
        <>
          <FirstContainer />
          <SecondContainer />+{" "}
          {moviePage.isClicked && (
            <MoviePage
              movieId={movieId}
              title={title}
              overview={overview}
              rating={rating}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
