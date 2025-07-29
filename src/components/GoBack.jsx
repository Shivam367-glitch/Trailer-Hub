import { Button } from "react-bootstrap"
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const GoBack = () => { 
    const navigate = useNavigate();
  return (
   <>
   <Button
             variant="outline-light"
             size="sm"
             className="ms-3 mb-3 px-3 py-2 d-inline-flex align-items-center gap-2 shadow-sm rounded-pill"
             onClick={() => navigate(-1)}
           >
             <FaArrowLeft /> Back
           </Button>
   </>
  )
}

export default GoBack