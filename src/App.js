import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import shopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkcout.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import Header from './components/header/header.component.jsx';

import { setCurrentUser } from './redux/user/user.actions';
import CollectionPage from './pages/collection/collection.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },
            console.log(this.state)
          );
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignOut />
              )
            }
          />
          <Route exact path="/shop" component={shopPage} />
          <Route exact path="/shop/:collectionId" component={CollectionPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>

        {/* <HomePage /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentUser: user => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
