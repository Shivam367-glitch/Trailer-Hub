
import { API_OPTIONS } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingPeople } from "../utils/peopleSlice"; 
import {BASE_URL} from "../utils/Constants";  
const useTrendingPeople = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const trendingPeople=useSelector((store)=>store.people.trendingPeople);
    const getPeopleList = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}trending/person/week`,
        { ...API_OPTIONS }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const json = await response.json();
      if (json) {
        console.log(json);
        
        dispatch(addTrendingPeople(json.results));
      }
    } catch (error) {
      console.error("Error fetching People List:", error);
      setError(error?.message || "Something Went Wrong!");
    } finally {
      setLoading(false);
    }
    };

  useEffect(() => {
    if (!trendingPeople || trendingPeople.length === 0) { 
      getPeopleList();
    }
  }, []);

  return [ error, loading ];
};

export default useTrendingPeople;