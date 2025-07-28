import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies:null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies:null,
    viewedMovie: null,
    genres: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
       state.nowPlayingMovies = action.payload.results
    },
    addPopularMovies: (state, action) => {
      state.popularMovies =  action.payload.results
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload.results
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies =action.payload.results
    },
    addViewedMovie: (state, action) => {
      state.viewedMovie = action.payload;
    },
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
    removeViewedMovie: (state) => {
      state.viewedMovie = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addViewedMovie,
  addGenres,
  removeViewedMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
