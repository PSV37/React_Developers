import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';
import shopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAAuth = null;

  componentDidMount() {
    this.unSubscribeFromAAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log({ user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sign" component={SignInAndSignOut} />
          <Route exact path="/shop" component={shopPage} />
        </Switch>

        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;
