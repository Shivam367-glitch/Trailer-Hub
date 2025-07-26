
import { API_OPTIONS } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularPeople } from "../utils/peopleSlice"; 
import {BASE_URL} from "../utils/Constants";  
const usePopularPeople = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const popularPeople=useSelector((store)=>store.people.popularPeople);
    const getPeopleList = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `${BASE_URL}/person/popular`,
        { ...API_OPTIONS }
      );
      const json = await response.json();

      if (!response.ok) {
          throw new Error(json.status_message || "Failed to fetch Movies");
      }

  
        dispatch(addPopularPeople(json.results));

    } catch (error) {
      setError(error?.message || "Something Went Wrong!");
    } finally {
      setLoading(false);
    }
    };

  useEffect(() => {
    if (!popularPeople || popularPeople.length === 0) { 
      getPeopleList();
    }
  }, []);

  return [ error, loading ];
};

export default usePopularPeople;