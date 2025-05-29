import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchDiscover } from "../utils/discoverSlice";
import List from "./List";

const DiscoverPage = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
   const country=useSelector((store)=>store?.country?.country);
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiscover({country, page, category}));
  }, [country, page, category, dispatch]);

  const { movies, total_pages, status, error } = useSelector((store) => store.discover);
  if (status === "loading") {
     <div>Loading...</div>;
  }

  if(status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="movie-grid grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <List title={category} movieList={movies} />
      </div>

      <div className="pagination flex justify-center items-center gap-4 mt-6">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Prev
        </button>
        <span>Page {page} of {total_pages}</span>
        <button onClick={() => setPage((p) => Math.min(total_pages, p + 1))} disabled={page === total_pages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DiscoverPage;
