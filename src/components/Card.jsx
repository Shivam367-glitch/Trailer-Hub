import { useNavigate } from "react-router-dom";

const Card = ({img,directTo}) => {  
  
  const navigate=useNavigate();

  const showDetails=()=>{
    navigate(directTo);
  } 
 
  return (
      <img src={img} alt="" className="img-fluid rounded-4  cursor_pointer m-md-3 border-info"
      onClick={showDetails}
      style={{height:"220px"}}
      />
  )
}

export default Card
