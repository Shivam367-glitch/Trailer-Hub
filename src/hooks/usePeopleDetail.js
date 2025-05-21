
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

      const[person,personMovies,personIds]=await Promise.all([ fetch(
        `${BASE_URL}person/${peopleId}`,
        { ...API_OPTIONS }
      ),
      fetch(`${BASE_URL}person/${peopleId}/movie_credits`,{...API_OPTIONS}),
      fetch(`${BASE_URL}person/${peopleId}/external_ids`,{...API_OPTIONS})
    ]);


    const personJson = await person.json();
    const personMoviesJson = await personMovies.json();

    const personIdsJson = await personIds.json();

    dispatch(addViewedPeople({
      ...personJson,...personIdsJson
    }));
    dispatch(addViewedPeopleMovies(personMoviesJson.cast));

    
      
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