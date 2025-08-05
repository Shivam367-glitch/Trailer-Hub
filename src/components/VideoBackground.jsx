import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import ReactPlayer from "react-player/lazy";
import {YOUTUBE_BASE_LINK} from "../utils/Constants";
import { memo } from "react";
const VideoBackground = ({ id}) => {
  useMovieTrailer(id);
  const nowPlaying = useSelector((store) => store?.nowPlaying); 
  const { videoId, playing } = nowPlaying;
  if (!videoId) return null;

  return (
    <ReactPlayer 
      url={`${YOUTUBE_BASE_LINK}${videoId}`}
      playing={playing} 
      loop={true}
      muted={true}
      controls={false}
      width={"100%"} 
      height={"100%"}
      fallback={<>Loading...</>}
      style={{ position: "absolute", top: 0, left: 0 }}
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              rel: 0
          },
        },
      }}
    />
  );
};

export default memo(VideoBackground);


