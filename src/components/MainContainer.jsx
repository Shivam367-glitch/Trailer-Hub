import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {

    const movies=useSelector((store)=>store.movie?.topRatedMovies); 
      
    if(!movies || movies.length==0)return ; 


    const {id,title,overview}=movies[0];
    

  return (
    <>
        <VideoBackground id={id}/>
        <VideoTitle title={title} overview={overview}/>
    </>
  )
}

export default MainContainer