import React, { Fragment } from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = props => {
  const { title, items } = props;
  return (
    <Fragment>
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherProps }) => (
              <CollectionItem key={id} {...otherProps} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CollectionPreview;
