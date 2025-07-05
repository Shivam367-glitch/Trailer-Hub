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
      console.log("addNowPlayingMovies");
       state.nowPlayingMovies = action.payload.results
    },
    addPopularMovies: (state, action) => {
      console.log("addPopularMovies");
      state.popularMovies =  action.payload.results

    },
    addTopRatedMovies: (state, action) => {
      console.log("addTopRatedMovies");
      state.topRatedMovies = action.payload.results
    },
    addUpcomingMovies: (state, action) => {
      console.log("addUpcomingMovies");
      state.upcomingMovies =action.payload.results
    },
    addViewedMovie: (state, action) => {
      console.log("addViwedMovie");
      state.viewedMovie = action.payload;
    },
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
    removeViewedMovie: (state) => {
      console.log("removeViewedMovie");
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
