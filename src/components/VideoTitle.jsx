import { memo } from "react";
import { Button } from "react-bootstrap"
import { FaPlay,FaInfoCircle, FaPause  } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { togglePlaying } from "../utils/nowPlayingSlice";

const VideoTitle = ({title,overview}) => { 

    const {id, playing} = useSelector((store) => store?.nowPlaying);
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const showDetails=()=>{
      navigate(`/movie/${id}`)
    }
  return (
    <div className="position-absolute text-white ms-4 text-white mt-0 d-none d-md-block top-50  translate-middle-y ">
        <h1 className="display-5 fw-bold">{title}</h1>
        <p className="w-35 lead">{overview}</p>
        <div className="d-flex flex-row gap-2">
            <Button   variant="light" className="text-dark" onClick={()=>{dispatch(togglePlaying())}}>{
              playing ?<>
              <FaPause size={23} color="black"/><span className="ms-2">Pause</span>
              </> 
              :
               <>
              <FaPlay size={23}/><span className="ms-2">Play</span>
              </>

              }</Button>
            <Button   variant="light" className="bg-secondary text-white"   onClick={showDetails}><FaInfoCircle size={23}/><span className="ms-2">More Info</span></Button>
        </div>
    </div>
  )
}

export default memo(VideoTitle) 