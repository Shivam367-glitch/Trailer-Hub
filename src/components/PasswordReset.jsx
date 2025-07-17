
import  { useState,useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../utils/firebase" 
import { Container,Row,Col, Form, FloatingLabel, Button ,Spinner} from "react-bootstrap";
import { WEB_URL } from "../utils/Constants";
const PasswordReset = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); 
  const [loading,setLoading]=useState(false);
  const email=useRef(null); 
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email?.current?.value) {
      setError("Please enter a valid email address.");
      return;
    }

    try { 
      setLoading(true)
      await sendPasswordResetEmail(auth, email?.current?.value,{
        url:WEB_URL
      });
      setMessage("Password reset email sent successfully. Please check your inbox.");
    } catch (err) {
      setError(`Error: ${err.message}`);
    } 
    finally{
      setLoading(false); 

    }
  };

  return (
   <>
   <Container fluid={true}> 
    <Row className="text-center text-white d-flex justify-content-center align-items-center mt-5">  
      <Col  xs={11} sm={10} md={8} lg={4}>  
      <Form className="p-4  rounded shadow form_container bg-dark" onSubmit={handlePasswordReset}>
        <h2>Reset Your Password</h2> 
        <FloatingLabel controlId="floatingInput" label="Enter Your Email " className="mb-3 text-white">
            <Form.Control 
              type="text" 
              placeholder="Enter Your Email"
              className="bg-dark text-white border-secondary rounded-2"
              ref={email}
            />
          </FloatingLabel>
          <Button  variant="danger" type="submit"className="w-100 fw-medium text-white mb-3 rounded-3" disabled={loading} >   {loading && <Spinner animation="border" size="sm" /> }  Send Reset Email</Button>
      
          {message && <p className="text-danger mt-3" >{message}</p>}
          {error && <p className="text-danger mt-3" >{error}</p>}
      </Form>

      </Col>
    </Row>
    </Container>   
   </>
  );
};

export default PasswordReset;
