import React from "react";

import useMoveieTrailer from "../utils/useMovieTrailer";

const TrailerBackground = ({ movieId }) => {
  const trailer = useMoveieTrailer(movieId);

  return (
    <div className="w-full h-0 pb-[56.25%] relative md:aspect-video">
      <iframe
        className="absolute w-full h-full top-0 left-0 border-0 "
        src={
          "https://www.youtube.com/embed/" +
          trailer +
          "?controls=0&&mute=1&&autoplay=1&&playlist=" +
          trailer +
          "&&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default TrailerBackground;
