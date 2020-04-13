import React from 'react';
import './custom-button.style.scss';
import { CustomButtonContainer } from './custom.styles';

// const CustomButton = props => {
//   const { children, isGoogleSignIn, inverted, ...otherProps } = props;
//   return (
//     <button
//       className={`${inverted ? 'inverted' : ''} ${
//         isGoogleSignIn ? 'google-sing-in' : ''
//       } custom-button`}
//       {...otherProps}
//     >
//       {children}
//     </button>
//   );
// };

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
