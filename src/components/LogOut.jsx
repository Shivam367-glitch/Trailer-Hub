import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {   


  const navigate=useNavigate(); 
  let timeId;


  // useEffect(()=>{
  //  timeId= setTimeout(()=>{ 
  //     navigate('/');
  //   },30000)
  // },[])
  return (
    
    <Container fluid={true} className=''>
        <Row className='m-0 p-0 justify-content-center align-items-center log_out_container' >  
            <Col xs={11} sm={10} md={8} lg={4} className='position-absolute bg-white  px-4 py-5 d-flex flex-column gap-2'>  
             <h2>Leaving So Soon?</h2> 
             <p className="text-secondary">Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer.</p>
             <p className="text-secondary">You’ll be redirected to Netflix.com in 30 seconds.</p>
             <Button variant='secondary'  className='w-100 fw-medium text-white  rounded-3' onClick={()=>{
              clearInterval(timeId); 
              // navigate('/');
             }} >Go Now</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default LogOut