import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: {
      results: null,
      page: 1,
      totalPages: 0,
    },
    popularMovies:  {
      results: null,
      page: 1,
      totalPages: 0,
    },
    topRatedMovies:  {
      results: null,
      page: 1,
      totalPages: 0,
    },
    upcomingMovies:  {
      results: null,
      page: 1,
      totalPages: 0,
    },
    viewedMovie: null,
    genres: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      console.log("addNowPlayingMovies");
       state.nowPlayingMovies = {
    results: action.payload.results,
    page: action.payload.page,
    totalPages: action.payload.total_pages,
  }
    },
    setNowPlayingPage: (state, action) => {
  state.nowPlayingMovies.page = action.payload;
},
    addPopularMovies: (state, action) => {
      console.log("addPopularMovies");
      state.popularMovies = {
    results: action.payload.results,
    page: action.payload.page,
    totalPages: action.payload.total_pages,
  };
    },
     setPopularPage: (state, action) => {
  state.popularMovies.page = action.payload;
},
    addTopRatedMovies: (state, action) => {
      console.log("addTopRatedMovies");
      state.topRatedMovies = {
    results: action.payload.results,
    page: action.payload.page,
    totalPages: action.payload.total_pages,
  };
    },
     setTopRatedPage: (state, action) => {
  state.topRatedMovies.page = action.payload;
},
    addUpcomingMovies: (state, action) => {
      console.log("addUpcomingMovies");
      state.upcomingMovies ={
    results: action.payload.results,
    page: action.payload.page,
    totalPages: action.payload.total_pages,
  };
    },
     setUpcomingPage: (state, action) => {
  state.upcomingMovies.page = action.payload;
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
  setNowPlayingPage,
  addPopularMovies,
  setPopularPage,
  addTopRatedMovies,
  setTopRatedPage,
  addUpcomingMovies,
  addViewedMovie,
  setUpcomingPage,
  addGenres,
  removeViewedMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
