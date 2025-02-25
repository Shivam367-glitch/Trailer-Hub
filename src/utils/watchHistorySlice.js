import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, auth } from "./firebase";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, setDoc } from "firebase/firestore";


const getUserRef = () => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");
  return doc(db, "watchHistories", user.uid);
};
// Fetch user's WatchHistory
export const fetchWatchHistory = createAsyncThunk("watchHistory/fetch", async () => {
  const userRef = getUserRef();
  const docSnap = await getDoc(userRef);
  
  if (docSnap.exists()) {
    return docSnap.data().movies || [];
  } else {
    await setDoc(userRef, { movies: [] });
    return [];
  }
});

// Add movie to WatchHistory
export const addToWatchHistory = createAsyncThunk("watchHistory/add", async (movie, { rejectWithValue }) => {
  try {
    const userRef = getUserRef();
    await updateDoc(userRef, { movies: arrayUnion(movie) });
    return movie;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


// Remove movie from WatchHistory
export const removeFromWatchHistory = createAsyncThunk("watchHistory/remove", async (movie, { rejectWithValue }) => {
  try {
    const userRef = getUserRef();
    await updateDoc(userRef, { movies: arrayRemove(movie) });
    return movie.id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Redux Slice
const watchHistorySlice = createSlice({
  name: "watchHistory",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchWatchHistory.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.status = "succeeded";
    })
    .addCase(addToWatchHistory.fulfilled, (state, action) => {
      state.movies.push(action.payload);
      state.status = "succeeded";
    })
    .addCase(removeFromWatchHistory.fulfilled, (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      state.status = "succeeded";
    })
    .addMatcher(
      (action) => action.type.endsWith("/pending"), 
      (state) => {
        state.status = "loading";
        state.error = null;
      }
    )
    .addMatcher(
      (action) => action.type.endsWith("/rejected"), 
      (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      }
    );
  },
});

export default watchHistorySlice.reducer;
