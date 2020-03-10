import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <spna className="empty-message">
          Your cart is empty
          <br />
          <small>You can add more items... </small>
        </spna>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  };
};

// const mapStateToProps = state => {
//   return {
//     cartItems: selectCartItemsCount(state),
//   };
// };

export default withRouter(connect(mapStateToProps)(CartDropdown));
