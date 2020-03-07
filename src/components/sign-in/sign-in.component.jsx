import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };

  handleOnchange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I alreaddy have Account</h2>
        <small>Sign in with your email and password</small>

        <div>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              handleChange={this.handleOnchange}
              label="Enter email"
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              handleChange={this.handleOnchange}
              label="Enter Password"
            />

            <div className="buttons">
              <CustomButton type="submit"> Submit Form </CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign IN With Google
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
