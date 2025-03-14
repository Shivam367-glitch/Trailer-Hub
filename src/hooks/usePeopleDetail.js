
import { API_OPTIONS } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addViewedPeople, addViewedPeopleMovies } from "../utils/peopleSlice"; 
import {BASE_URL} from "../utils/Constants";  
const usePeopleDetail = (peopleId) => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const viewedPeople=useSelector((store)=>store?.movie?.viewedPeople?.id==peopleId);
    const getPeopleInfo = async () => {
    if (!peopleId) return; 
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}person/${peopleId}`,
        { ...API_OPTIONS }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const json = await response.json();
      if (json) {
        dispatch(addViewedPeople(json));
        const moviesResponse = await fetch(`${BASE_URL}person/${peopleId}/movie_credits`,{...API_OPTIONS});
        if (!moviesResponse.ok) {
          throw new Error(`Error ${moviesResponse.status}: ${moviesResponse.statusText}`);
        }
  
        const moviesList = await moviesResponse.json(); 
        dispatch(addViewedPeopleMovies(moviesList.cast));
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      setError(error?.message || "Something Went Wrong!");
    } finally {
      setLoading(false);
    }
    };

  useEffect(() => {
    if (!viewedPeople && peopleId) { 
      getPeopleInfo();
    }
  }, [peopleId]);

  return [ error, loading ];
};

export default usePeopleDetail;