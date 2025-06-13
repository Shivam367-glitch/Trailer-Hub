import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"; 
import usePeopleDetail from "../hooks/usePeopleDetail";
import {  Col, Container, Row } from "react-bootstrap";
import { IMG_CDN_URL } from "../utils/Constants";
import List from "./List";
import SocialIcons from "./SocialIcons";
import ReadMoreText from "./ReadMoreText";



const PeopleDetail = () => { 
    let { peopleId } = useParams();
    const viewedPeople = useSelector((store) => store?.people?.viewedPeople);
    const viewedPeopleMovies = useSelector((store) => store?.people?.viewedPeopleMovies);
    console.log(viewedPeople);

    const [error, loading] = usePeopleDetail(peopleId);
    if (!viewedPeople ) return null;
    const {name,profile_path,biography,homepage,birthday,place_of_birth,known_for_department,facebook_id,instagram_id,twitter_id,youtube_id}=viewedPeople 

  return (
    <> 
    <Container fluid={true} >
           <Row className=" d-flex flex-column flex-lg-row  bg-dark opacity-90 py-3 gap-2 text-white">
             {loading && <Col className="bg-dark text-white">Loading People details...</Col>}
             {error && <Col className="bg-dark text-white">Failed to fetch People details. Please try again later.</Col>}
             {!loading && !error && (
            <>
              <Col xs={12}  lg={3}  className="d-flex flex-row  justify-content-center  mb-2 ">
                <img  
                  src={profile_path?IMG_CDN_URL + profile_path:"/person.png"}
                  alt={name} 
                  className="img-fluid rounded-4 border"
                  style={{ maxHeight: "500px"}}
                />
              </Col>
              <Col xs={12}  lg={8} className=" d-flex flex-column justify-content-start gap-2 mb-2   border-start">  
              <p className=" mt-3 fw-bolder fs-4 text-white  d-flex flex-wrap justify-content-center align-items-center gap-3">{homepage ? (
                <Link to={homepage} target="_blank" className="cursor_pointer text-decoration-underline text-white hover-effect">{name}</Link>
              ) : (<span>{name}</span>)} 
                <SocialIcons facebook_id={facebook_id} youtube_id={youtube_id} instagram_id={instagram_id} twitter_id={twitter_id} />
              </p> 
              <p className="d-flex flex-row justify-content-between"><span>Born On : {new Date(birthday?birthday:null).toLocaleDateString("en-US").replace(/\//g, '-')}</span><span> Born At : {place_of_birth?place_of_birth:"NA"}</span> </p>
              <p>Department : {known_for_department}</p>
              <ReadMoreText text={biography}/>
              </Col>
            </>
          )}
         {
          !loading && !error && <Col xs={12}> 
           <List title={"Movies"} movieList={viewedPeopleMovies} />
          </Col>
         }
            </Row>
         </Container>
    </>
  )
}

export default PeopleDetail