import React, { Fragment } from 'react';
// import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles';
import Directory from '../components/directory/directory.component';

const HomePage = () => {
  return (
    <Fragment>
      {/* <div className="homepage">
        <Directory />
      </div> */}
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    </Fragment>
  );
};

export default HomePage;
