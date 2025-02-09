import { Button } from "react-bootstrap"
import { FaPlay,FaInfoCircle  } from "react-icons/fa"

const VideoTitle = ({title,overview}) => {
  return (
    <div className="position-absolute top-35 text-white ms-4 text-white mt-0 d-none d-md-block">
        <h1> {title}</h1> 
        <p className="w-35">{overview}</p>
        <div className="d-flex flex-row gap-2">
            <Button   variant="light" className="text-dark"><FaPlay size={18} color="black"/><span className="ms-2">Play</span></Button>
            <Button   variant="light" className="bg-secondary text-white"><FaInfoCircle size={23}/><span className="ms-2">More Info</span></Button>
        </div>
    </div>
  )
}

export default VideoTitle 