import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMoveieTrailer from "../utils/useMovieTrailer";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { disableMoviePage } from "../utils/movieSlice";

const MoviePage = ({ movieId, title, rating, overview }) => {
  const [mute, setMute] = useState(false);
  const dispatch = useDispatch();

  const trailer = useMoveieTrailer(movieId);
  return (
    <div className="fixed bg-black/75 h-full w-full z-40 inset-0 flex justify-center items-center ">
      <div className="flex flex-col bg-black w-11/12 lg:w-9/12 max-346:h-2/3 max-767:h-3/4 md:3/4  lg:h-4/5 gap-4  ">
        <div className="left-3/6 w-full h-3/6 bg-black z-10">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-3xl text-white z-50"
              onClick={() => dispatch(disableMoviePage())}
            >
              X
            </button>
            <button
              className="absolute bottom-4 right-4 text-4xl z-50"
              onClick={() => setMute(!mute)}
            >
              {(mute ? "🔇" : "🔊")}
            </button>
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <iframe
              className="relative aspect-video w-full  "
              src={
                "https://www.youtube.com/embed/" +
                trailer +
                "?controls=0&mute=" +
                (mute ? 1 : 0 ) +
                "&autoplay=1&playlist=" +
                trailer +
                "&loop=1&showinfo=0"
              }
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className=" absolute max-767:bottom-24 md:bottom-32 lg:bottom-0 flex flex-col gap-2 md:w-3/4 lg:w-2/4  max-512:p-2  max-767:p-6 md:p-8 lg:p-14 z-50 text-white">
          <h1 className="max-512:text-base max-767:text-lg md:text-xl lg:text-3xl font-bold">{title}</h1>
          <p className="max-512:w-11/12 max-512:text-sm max-767:w-3/4 md:text-base lg:text-lg">{overview}</p>
          <p className="max-512:text-sm md:text-base lg:text-lg">
            TMDB : ⭐{rating ? rating.toFixed(1) : "N/A"}
          </p>
          <button className="flex items-center gap-2 bg-gray-300  px-2 py-1  lg:py-3 lg:px-6 md:my-1 lg:my-4 max-767:w-16 md:w-20 lg:w-28 hover:bg-gray-400 duration-500 rounded-md text-black ">
            <FontAwesomeIcon className=" max-512:text-lg md:text-xl lg:text-2xl" icon={faPlay} />
            <span>Play</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
