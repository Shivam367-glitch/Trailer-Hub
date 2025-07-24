import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const LogOut = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleAutoLogOut();
    }, 30000);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleAutoLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLog = (e) => {
    if (e.target.name === 'GoNow') {
      clearTimeout(timeoutRef.current);
      handleAutoLogOut();
    }
  };

  return (
    <Container fluid>
      <Row className='m-0 p-0 justify-content-center align-items-center log_out_container'>
        <Col xs={11} sm={10} md={8} lg={4} className='position-absolute bg-white px-4 py-5 d-flex flex-column gap-2'>
          <h2>Leaving So Soon?</h2>
          <p className='text-secondary'>
            Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer.
          </p>
          <p className='text-secondary'>You’ll be redirected to Login Page in 30 seconds.</p>
          <Button variant='secondary' name='GoNow' className='w-100 fw-medium text-white rounded-3' onClick={handleLog}>
            Go Now
          </Button>
          {error && <p className='text-danger text-center'>{error}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default LogOut;
