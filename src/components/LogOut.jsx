import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {   


  const navigate=useNavigate(); 
  let timeId;


  useEffect(()=>{
   timeId= setTimeout(()=>{ 
      navigate('/');
    },30000)
  },[])
  return (
    
    <Container fluid={true} className=' m-0 p-0'>
        <Row className='m-0 p-0'>  
          <Col xs={12} className='m-0 p-0 w-100 position-absolute top-0'> 
          <img src="login-the-crown_2-1500x1000.jpg" alt=""  className='img-fluid w-100'/>
          </Col>
            <Col xs={4} className='position-absolute bg-white mx-auto log_out_container px-4 py-5 d-flex flex-column gap-2'>  
             <h2>Leaving So Soon?</h2> 
             <p className="text-secondary">Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer.</p>
             <p className="text-secondary">You’ll be redirected to Netflix.com in 30 seconds.</p>
             <Button variant='primary ' className='border-none' onClick={()=>{
              clearInterval(timeId); 
              navigate('/');
             }} >Go Now</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default LogOut