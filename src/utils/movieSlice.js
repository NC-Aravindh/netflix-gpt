import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    upComingMovies:null,
    topRatedMovies:null,
    popularMovies:null
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addUpComingMovies(state, action) {
      state.upComingMovies = action.payload;
    },
    addtopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies ,addUpComingMovies ,addtopRatedMovies ,addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;
