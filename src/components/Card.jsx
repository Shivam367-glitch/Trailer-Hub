import { useNavigate } from "react-router-dom";
const Card = ({img,directTo}) => {  
  
  const navigate=useNavigate(); 


  const showDetails=()=>{
    navigate(directTo);
  } 

  
  return (
      <img src={img} alt="" className="img-fluid rounded cursor_pointer" style={{height:"220px"}}
      onClick={showDetails}
      />
  )
}

export default Card

