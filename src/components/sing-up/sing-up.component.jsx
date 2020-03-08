import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password != confirmPassword) {
      alert('password dose not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log({ error });
    }
  };

  handleOnchange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a Account</h2>
        <small>Sign in with your email and password</small>
        <div>
          <form onSubmit={this.handleSubmit} style={{ width: '147%' }}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              handleChange={this.handleOnchange}
              label="Display Name"
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              handleChange={this.handleOnchange}
              label=" email"
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              handleChange={this.handleOnchange}
              label="Password"
            />

            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              handleChange={this.handleOnchange}
              label="Confirm Password"
            />
            <div className="buttons">
              <CustomButton type="submit"> Sign Up </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
