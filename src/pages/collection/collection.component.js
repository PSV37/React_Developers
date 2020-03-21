import React from 'react';
import { connect } from 'react-redux';
import './collection.style.scss';
import { selectCollection } from '../../redux/shop/shop.selector';
import ColleactionItem from '../../components/collection-item/collection-item.component';
import { Link } from 'react-router-dom';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title} </h2>
      <small>
        <Link className="option" to="/">
          &#8249; BACK
        </Link>
      </small>
      <div className="back_url "></div>
      <div className="items">
        {items.map(item => (
          <ColleactionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
