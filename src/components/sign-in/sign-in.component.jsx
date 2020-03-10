import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMsg: '',
      isError: false,
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      this.setState({
        isError: true,
        errorMsg: error.message,
      });
      console.log(error.message);
      console.log({ error });
    }
  };
  handleSubmit1 = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      this.setState({
        isError: true,
        errorMsg: error.message,
      });
      console.log(error.message);
      console.log({ error });
    }
  };
  handleOnchange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password, isError, errorMsg } = this.state;
    return (
      <div className="sign-in">
        <h2>I alreaddy have Account</h2>
        <small>Sign in with your email and password</small>
        {isError ? (
          <div>
            <div
              className="alert alert-danger alert-dismissible"
              style={{
                fontSize: 'small',
                height: '50px',
                padding: '6px 10px 6px 16px',
                width: '97%',
              }}
            >
              <button type="button" className="close" data-dismiss="alert">
                &times;
              </button>
              <strong>OOP's!</strong> {errorMsg}
            </div>
          </div>
        ) : (
          ''
        )}

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
              <CustomButton onClick={this.handleSubmit1} type="button">
                {' '}
                Submit Form{' '}
              </CustomButton>
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
