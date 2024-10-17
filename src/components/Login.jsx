import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { validateForm } from "../utils/validateForm"
import { useRef, useState } from "react" 
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase" 
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { BAC_IMG_CDN_URL } from "../utils/Constants";
const Login = () => { 
  const[error,setError]=useState(); 

  const [showPassword,setShowPassword]=useState(false);
  const[isSignInForm,setIsSignInForm]=useState(true);
  const email=useRef(null); 
  const password=useRef(null);  
  const name =useRef(null);

  const handleSubmit=async(e)=>{ 
    e.preventDefault();
    setError("")
    
    const result=validateForm(isSignInForm,email?.current?.value,password?.current?.value,name?.current?.value);  
    
    
    if(result){
       
      setError(result);
      return;
    }else{
      if(isSignInForm){ 
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value);
        } catch (error) {
          switch (error.code) {
            case 'auth/wrong-password':
              setError('Wrong password.');
              break;
            case 'auth/user-not-found':
              setError('No user found with this email.');
              break;
            case 'auth/invalid-credential':
              setError('Please Login with valid Email And Password');
              break; 
            case 'auth/network-request-failed':
              setError("Please Check Your Internet Connection");
              break; 
            default:
              // setError(error.message); 
              setError("An unexpected error occurred. Please try again.")
          }
        }
      }else{
  
        // const auth=getAuth();
        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value,name?.current?.value)
          .then((userCredential) => {
            const user = userCredential.user;  
            updateProfile(auth.currentUser, {
              displayName:name?.current?.value, photoURL: "https://res.cloudinary.com/mern-app-cruds/image/upload/v1705033984/uploads/user_avatar_1705033984352.png"
            }).then(() => {
              alert("User Profile Updated")
            }).catch((error) => {
              // An error occurred 
              setError(error.message);
            });
            
            
            // dispatch(addUser(auth.currentUser));
        
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/email-already-in-use":
                setError("Email Already In Use")
                break;
              case 'auth/network-request-failed':
                  setError("Please Check Your Internet Connection");
                  break; 
              default: 
              setError("An unexpected error occurred. Please try again.")
                break;
            }
          });
      }
    }
  }
  return (
    <div >
      <div className="position-absolute top-0">
        <img src={BAC_IMG_CDN_URL} alt="" srcSet="" className="img-fluid" />
      </div> 
      <Form className="position-absolute form_container bg-dark p-5 w-25 rounded-4">
        <h2 className="text-white mb-4">{isSignInForm?"Sign In":"Sign Up"}</h2>
           {!isSignInForm &&   <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3 text-white">
           <Form.Control type="text" placeholder="Full Name" className="bg-dark text-white border-secondary rounded-2" ref={name}/>
          </FloatingLabel>}
          {/* Floating Label for Email or Mobile */}
          <FloatingLabel controlId="floatingInput" label="Email or mobile number" className="mb-3 text-white">
            <Form.Control 
              type="text" 
              placeholder="Email or mobile number" 
              className="bg-dark text-white border-secondary rounded-2"
              ref={email}
            />
          </FloatingLabel>

          {/* Floating Label for Password */}
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 text-white d-flex flex-row gap-2">
            <Form.Control 
              type={showPassword?"text":"password" }
              placeholder="Password" 
              className="bg-dark text-white border-secondary rounded-2"
              ref={password} 
            />  
           {
            !showPassword? <FaEye size={22} className="align-self-center position-absolute end-0 me-1" onClick={()=>{
              setShowPassword(!showPassword)
            }}/>:<FaEyeSlash  size={22} className="align-self-center position-absolute end-0 me-1" onClick={()=>{
              setShowPassword(!showPassword)
            }}/>
           }
          </FloatingLabel>
          {error && <p  className="text-danger my-3">{error}</p>}
          {/* Sign In Button */}
          <Button  type="submit"className="w-100 fw-medium text-white btn-danger opacity-100 mb-3 rounded-2" onClick={(e)=>{handleSubmit(e)}}>{isSignInForm?"Sign In":"Sign Up"}</Button>

          {/* OR Divider */}
          <span className="text-secondary fw-medium fs-5 text-center d-block mb-3">OR</span>

          {/* Use Sign-in Code Button */}
          <Button   className="w-100 fw-medium text-white bg-secondary rounded-3 border-0"  style={{background: 'transparent', }}>Use a sign-in code</Button>

          {/* Forgot Password Link */}
          <Link to="/" className="text-center d-block my-3 text-white hover_white"> Forgot password?</Link>

          {/* Remember Me Checkbox */}
          <div className="d-flex flex-row gap-2 align-items-center text-white mb-3">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="text-white">Remember me</label>
          </div>

          {/* Sign Up Link */}
          <span className="text-secondary" onClick={() => { setIsSignInForm(!isSignInForm) }}>
  { 
    isSignInForm 
      ? (
        <>
          New to Netflix? 
          <Link className="text-white hover_white ms-1">Sign up now.</Link>
        </>
      ) 
      : (
        <>
          Already User?
          <Link className="text-white hover_white ms-1">Sign in now.</Link>
        </>
      )
  }
</span>

      </Form>

    </div>
  )
}

export default Login