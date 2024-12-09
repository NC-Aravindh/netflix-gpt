import React from "react";

import useMoveieTrailer from "../utils/useMovieTrailer";

const TrailerBackground = ({ movieId }) => {
  const trailer = useMoveieTrailer(movieId);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
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
