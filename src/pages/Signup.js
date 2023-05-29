import React from 'react';
import SignupForm from '../components/Signup';

const Signup = () => {
  const handleSignup = (formData) => {
    // Handle signup logic here, such as making an API call
    // with the provided signup form data
    console.log('Signup form data:', formData);
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default Signup;
