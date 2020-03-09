import React from 'react';
import './collection-item.style.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = props => {
  const { id, name, price, imageUrl } = props.item;
  const { addItem } = props;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(props.item)}>
        ADD TO CART{' '}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItem(item));
    },
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
