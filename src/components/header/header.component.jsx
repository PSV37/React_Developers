import React from 'react';
// import './header.style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartItem from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {
  HeaderContaier,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
} from './header.styles';

const Header = props => {
  const { currentUser, hidden } = props;
  return (
    // <div className="header">
    //   <Link to="/" className="logo-container">
    //     <Logo className="logo" />
    //   </Link>
    //   <div className="options">
    //     <Link className="option" to="/shop">
    //       SHOP
    //     </Link>
    //     <Link className="option" to="/shop">
    //       CONTACT
    //     </Link>
    //     {currentUser ? (
    //       <div className="option" onClick={() => auth.signOut()}>
    //         SIGN OUT
    //       </div>
    //     ) : (
    //       <Link className="option" to="/sign">
    //         SIGN IN
    //       </Link>
    //     )}
    //     <CartItem />
    //   </div>
    //   {hidden ? null : <CartDropdown />}
    // </div>

    <HeaderContaier>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>

        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/sign">SIGN IN</OptionLink>
        )}
        <CartItem />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContaier>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
  };
};

export default connect(mapStateToProps)(Header);
