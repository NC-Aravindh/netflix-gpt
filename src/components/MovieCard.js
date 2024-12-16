import React from "react";
import { TMDB_BASE_IMAGE_URL } from "../utils/constants";
import { showMoviePage } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ poster_path, title, overview, rating, movieId }) => {
  const dispatch = useDispatch();
  const movieDetails = {
    title: title,
    overview: overview,
    rating: rating,
    movieId: movieId
  };
  if (!poster_path) return null;
  const img_url = TMDB_BASE_IMAGE_URL + poster_path;
  return (
    <div
      onClick={() => dispatch(showMoviePage(movieDetails))}
      className="shrink-0 basis-20 md:basis-36 lg:basis-48 cursor-pointer"
    >
      <img className="rounded-lg" src={img_url} alt="img-card"></img>
    </div>
  );
};

export default MovieCard;
