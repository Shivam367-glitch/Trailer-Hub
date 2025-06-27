import Modal from "react-bootstrap/Modal";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/lazy";
import {YOUTUBE_BASE_LINK} from "../utils/Constants";
const VideoTrailer = (props) => {

  const {id,title} = props;
  useMovieTrailer(id);
  const {videoId} = useSelector((store) => store?.nowPlaying);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      fullscreen={true}
      className="bg-dark"
    >
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark m-0">
        {videoId ? (
          <ReactPlayer
                url={`${YOUTUBE_BASE_LINK}${videoId}`}
                playing={true} 
                loop={true}
                muted={true}
                controls={false}
                width={"100%"} 
                height={"100%"} 
                fallback={<>Loading...</>}
                  config={{
                    youtube: {
                      playerVars: {
                        autoplay: 1,
                        rel: 0
                    },
                  },
                }}
              />
        ) : (
          <p className="text-white fs-4 ms-3">Trailer Not Available !</p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default VideoTrailer;