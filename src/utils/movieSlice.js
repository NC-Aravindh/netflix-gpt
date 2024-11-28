import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    upComingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
    moviePage: {
      isClicked: false,
      title: null,
      overview: null,
      rating: null,
      movieId: null,
    },
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
    showMoviePage(state, action) {
      state.moviePage.isClicked = true;
      const { title, rating, movieId, overview } = action.payload;
      state.moviePage.title = title;
      state.moviePage.rating = rating;
      state.moviePage.overview = overview;
      state.moviePage.movieId = movieId;
    },
    disableMoviePage(state) {
      state.moviePage.isClicked = false;
    },
  },
});

export const {
  addNowPlayingMovies,
  addUpComingMovies,
  addtopRatedMovies,
  addPopularMovies,
  showMoviePage,
  disableMoviePage
} = movieSlice.actions;
export default movieSlice.reducer;
