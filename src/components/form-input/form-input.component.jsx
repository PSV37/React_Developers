import React from 'react';
import './form-input.style.scss';
import './form-input.style.scss';

const FormInput = props => {
  const { handleChange, label, ...otherProps } = props;
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
