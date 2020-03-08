import React from 'react';
import './sign-in-and-sign-out.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sing-up/sing-up.component';

const SignInAndSignOut = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignOut;
