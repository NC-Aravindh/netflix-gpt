import React from "react";
import { TMDB_BASE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  const img_url = TMDB_BASE_IMAGE_URL + poster_path;
  return (
    <div className="shrink-0 basis-48 ">
      <img className="rounded-lg" src={img_url} alt="img-card"></img>
    </div>
  );
};

export default MovieCard;
