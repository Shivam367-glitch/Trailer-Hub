import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchHistory } from "../utils/watchHistorySlice";
import List from "./List";

const WatchHistoryPage = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.watchHistory);

  useEffect(() => {
    dispatch(fetchWatchHistory());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (movies.length === 0) return <p>Your Watch History is empty!</p>;

  return (
    <div>
      <List title="Your Watch History"  movieList={movies} />
    </div>
  );
};

export default WatchHistoryPage;
