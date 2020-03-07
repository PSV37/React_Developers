import React from 'react';
import './custom-button.style.scss';

const CustomButton = props => {
  const { children, isGoogleSignIn, ...otherProps } = props;
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sing-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
