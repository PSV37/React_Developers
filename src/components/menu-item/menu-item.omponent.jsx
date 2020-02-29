import React, { Fragment } from 'react';
import './menu-item-style.scss';

const MenuItem = props => {
  const { title, imageUrl, size } = props;
  return (
    <Fragment>
      <div className={`${size} menu-item`}>
        <div
          className="background-image"
          style={{ background: `url(${imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuItem;
