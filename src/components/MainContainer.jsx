import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
   console.log("MainContainer Rendered");
    const movies=useSelector((store)=>store.movie?.nowPlayingMovies); 
      
    if(!movies || movies.length==0)return ;
   
    const {id,original_title,overview}=movies[0];
    

  return (
    <>
        <VideoBackground id={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </>
  )
}

export default MainContainer