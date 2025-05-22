import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import ReactPlayer from "react-player/lazy";
import {YOUTUBE_BASE_LINK} from "../utils/Constants";
const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const nowPlaying = useSelector((store) => store?.nowPlaying);
  const { videoId } = nowPlaying;
  if (!videoId) return null;

  return (
    <ReactPlayer
      url={`${YOUTUBE_BASE_LINK}${videoId}`}
      playing={true} 
      loop={true}
      muted={true}
      className="position-absolute m-0 p-0 top-0"
      width="100%"
      height="100%"
    />
  );
};

export default VideoBackground;
