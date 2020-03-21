import React, { Component, Fragment } from 'react';
import MenuItem from '../menu-item/menu-item.omponent';
import './directory.style.scss';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/direactory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  return (
    <Fragment>
      <div className="directory-menu">
        {sections.map(({ id, ...propsSections }) => (
          <MenuItem key={id} {...propsSections} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
