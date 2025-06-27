import { Col} from "react-bootstrap"
import Card from "./Card"
import { IMG_CDN_URL } from "../utils/Constants"

const GridList = ({title,items,people}) => {
  return (
   
    <>
    
    
    {
     !people &&<Col xs={12} className="  d-flex flex-row gap-2 gap-md-auto flex-wrap justify-content-around justify-content-md-center justify-content-lg-start my-3" > 
     {items?.map((item, ind) => (<Card  key={ind} id={item?.id} img={item?.poster_path?IMG_CDN_URL+item.poster_path:""} directTo={`/movie/${item.id}`} />))}
   </Col>
  }
 { 
           people && <Col xs={12} className="  d-flex flex-row gap-2 gap-md-auto flex-wrap justify-content-around justify-content-md-center justify-content-lg-start my-3" > 
             {items?.map((person, ind) => (<Card key={ind} id={person?.id} img={person?.profile_path?IMG_CDN_URL+person.profile_path:"/person.png"} directTo={`/people/${person.id}`} />))}
           </Col>
  } 
    </>
  )
}

export default GridList