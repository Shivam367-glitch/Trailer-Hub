import { Button, Col, Container, FloatingLabel, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { validateForm } from "../utils/validateForm";
import { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { fetchCountry } from "../utils/countrySlice.js";
import { useDispatch } from "react-redux";
 

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    isSignInForm ? email?.current?.focus() : name?.current?.focus();
  }, [isSignInForm]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(fetchCountry());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const emailValue = email?.current?.value.trim();
    const passwordValue = password?.current?.value.trim();
    const nameValue = name?.current?.value?.trim();

    const result = validateForm(isSignInForm, emailValue, passwordValue, nameValue);
    if (result) {
      setError(result);
      setLoading(false);
      return;
    }

    if (isSignInForm) {
      try {
        await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            setError('Wrong password.');
            break;
          case 'auth/user-not-found':
            setError('No user found with this email.');
            break;
          case 'auth/invalid-credential':
            setError('Please login with a valid email and password.');
            break;
          case 'auth/network-request-failed':
            setError("Please check your internet connection.");
            break;
          default:
            setError("An unexpected error occurred. Please try again.");
        }
      }
    } else {
      try {
        await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        await updateProfile(auth.currentUser, {
          displayName: nameValue,
          photoURL: "https://res.cloudinary.com/mern-app-cruds/image/upload/v1705033842/uploads/user_avatar_1705033842005.png"
        });
        alert("User Profile Updated");
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("Email already in use.");
            break;
          case "auth/network-request-failed":
            setError("Please check your internet connection.");
            break;
          default:
            setError("An unexpected error occurred. Please try again.");
        }
      }
    }

    setLoading(false);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col xs={11} sm={10} md={8} lg={4}>
          <Form
            className="p-4 rounded shadow form_container bg-dark"
            onSubmit={handleSubmit}
          >
            <h2 className="text-white mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>

            {!isSignInForm && (
              <FloatingLabel controlId="floatingName" label="Full Name" className="mb-3 text-white">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="bg-dark text-white border-secondary rounded-2"
                  ref={name}
                />
              </FloatingLabel>
            )}

            <FloatingLabel controlId="floatingEmail" label="Email or mobile number" className="mb-3 text-white">
              <Form.Control
                type="text"
                placeholder="Email or mobile number"
                className="bg-dark text-white border-secondary rounded-2"
                ref={email}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 text-white position-relative">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-dark text-white border-secondary rounded-2"
                ref={password}
              />
              <div
                role="button"
                className="position-absolute end-0 me-2 top-50 translate-middle-y"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </div>
            </FloatingLabel>

            {error && <p className="text-danger my-3">{error}</p>}

            <Button
              variant="danger"
              type="submit"
              className="w-100 fw-medium text-white mb-3 rounded-3"
              disabled={loading}
            >
              {loading ? <Spinner animation="border" size="sm" /> : isSignInForm ? "Sign In" : "Sign Up"}
            </Button>

            <span className="text-secondary fw-medium fs-5 text-center d-block mb-3">OR</span>

            <Button variant="secondary" className="w-100 fw-medium text-white rounded-3">
              Use a sign-in code
            </Button>

            <Link to="/password-reset" className="text-center d-block my-3 text-white hover_white">
              Forgot password?
            </Link>

            <div className="d-flex flex-row gap-2 align-items-center text-white mb-3">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="text-white">
                Remember me
              </label>
            </div>

            <span className="text-secondary" onClick={() => setIsSignInForm(!isSignInForm)}>
              {isSignInForm ? (
                <>
                  New to Trailer Hub?{" "}
                  <Link className="text-white hover_white ms-1">Sign up now.</Link>
                </>
              ) : (
                <>
                  Already a user? <Link className="text-white hover_white ms-1">Sign in now.</Link>
                </>
              )}
            </span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
