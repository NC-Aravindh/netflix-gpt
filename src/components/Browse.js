import React from "react";
import useMovieLists from "../utils/useMovieLists";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import MoviePage from "./MoviePage";
import { disableUserProfile } from "../utils/userSlice";

const GptSearchPage = lazy(() => import("./GptSearchPage"));
const UserProfilePage = lazy(()=> import ('./UserProfilePage'))
const Browse = () => {
  const moviePage = useSelector((store) => store.movie.moviePage);
  const { title, rating, movieId, overview } = moviePage;
  const dispatch = useDispatch();
  useMovieLists("now_playing");
  useMovieLists("upcoming");
  useMovieLists("top_rated");
  useMovieLists("popular");

  const isGptSearchEnabled = useSelector((store) => store.gpt.enableGptSearch);
  const isUserProfileOpen = useSelector(
    (store) => store.user.isUserProfileOpen
  );

  return (
    <div className="box-border">
      {isGptSearchEnabled ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <GptSearchPage />
        </Suspense>
      ) : (
        <>
          <FirstContainer />
          <SecondContainer />
          {moviePage.isClicked && (
            <MoviePage
              movieId={movieId}
              title={title}
              overview={overview}
              rating={rating}
            />
          )}
          {isUserProfileOpen && (
            <div
              onClick={() => dispatch(disableUserProfile())}
              className="fixed inset-0 bg-black/50 z-30"
            ></div>
          )}
          <Suspense fallback={<h1>Loading...</h1>}>
            <UserProfilePage />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Browse;
