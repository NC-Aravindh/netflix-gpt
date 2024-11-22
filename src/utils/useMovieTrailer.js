import { MOVIE_API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const useMoveieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState("");
  const getMovieTrailer = async () => {
    const TRAILER_URL =
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos";
    try {
      const data = await fetch(TRAILER_URL, MOVIE_API_OPTIONS);
      const json = await data.json();
      const trailerList = json.results.filter((item) => item.type === "Trailer");
      const trailer = trailerList.length ? trailerList[0].key : json.results[0];
      setTrailer(trailer);
    } catch (error) {
      console.log("MovieTrailer API fetch failed",error);
    }
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);

  return trailer;
};

export default useMoveieTrailer;
