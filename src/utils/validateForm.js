export const validateForm = (isSignInForm,Email, Password,Name) => { 
    // Email regex pattern
    const emailRegex = /^([a-zA-Z0-9_\.\-])+@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9]{2,4})+$/;
    const nameRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]{2,})+$/;

    // Password regex pattern: At least one digit, one lowercase letter, one uppercase letter, one special character, and between 6 to 20 characters
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}$/;
   
    // Validate Email
    if (!emailRegex.test(Email)) {
      return "Email is Not Valid";
    } 
  
    // Validate Password
    if (!passwordRegex.test(Password)) {
      return "Password is Not Valid. It must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be 6-20 characters long.";
    } 
    if(!isSignInForm){
        if(!nameRegex.test(Name))  {
          return "Enter Valid Name"; 
        }else{
          return null;
        }
    }

  

  
    return null;
  };
  