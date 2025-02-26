
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  
  useMovieTrailer(id);
  const nowPlaying = useSelector((store) => store?.nowPlaying);
  const { videoId } = nowPlaying;
  if (!videoId) return null;

  return (
    <iframe 
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&controls=0&playlist=${videoId}`}
      title={"video player"} 
      allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" }
      allowfullscreen
      className="position-absolute top-0 m-0 p-0 w-100 h-100 "
     
    ></iframe>
  );
};

export default VideoBackground;
