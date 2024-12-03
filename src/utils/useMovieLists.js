import { MOVIE_API_OPTIONS } from "./constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addtopRatedMovies,
  addUpComingMovies,
} from "./movieSlice";
import { TMDB_MOVIE_LIST_BASE_URL } from "./constants";

const useMovieLists = (movieListType) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const fetch_url = TMDB_MOVIE_LIST_BASE_URL + movieListType;
    try {
      const data = await fetch(fetch_url, MOVIE_API_OPTIONS);
      const json = await data.json();
      if (movieListType === "now_playing")
        dispatch(addNowPlayingMovies(json.results));
      else if (movieListType === "upcoming")
        dispatch(addUpComingMovies(json.results));
      else if (movieListType === "top_rated")
        dispatch(addtopRatedMovies(json.results));
      else if (movieListType === "popular")
        dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useMovieLists;
