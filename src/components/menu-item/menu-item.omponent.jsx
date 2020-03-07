import React, { Fragment } from 'react';
import './menu-item-style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = props => {
  const { title, imageUrl, size, linkUrl, history, match } = props;
  return (
    <Fragment>
      <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
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

export default withRouter(MenuItem);
