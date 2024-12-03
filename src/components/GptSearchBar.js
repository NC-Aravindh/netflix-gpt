import React, { useRef } from "react";
import openai from "../utils/openAi";
import { MOVIE_API_OPTIONS} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const userInput = useRef(null);
  const dispatch = useDispatch();

  const searchTMDBMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      MOVIE_API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  async function handleGptSearch() {
    const gptQuery =
      userInput.current.value +
      "Give me 5 movie suggestions separated by commas. Response should only contain the movies names . Example: Terminator , Rambo , Rocky.";

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });

    const gptMovieList = gptResponse.choices[0].message.content.split(",");
    const promiseArray = gptMovieList.map((movie) => searchTMDBMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResults(tmdbResults));
  }
  return (
    <div className="pt-36 w-[50%] text-center mx-auto">
      <form
        className="grid grid-cols-12 gap-4 bg-black p-4 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 rounded-lg p-4"
          ref={userInput}
          placeholder=" What movies you want to explore?"
        ></input>
        <button
          onClick={handleGptSearch}
          className="bg-red-700 col-span-3 p-4 rounded-lg text-white mr-4 hover:bg-red-600 ease-in"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
