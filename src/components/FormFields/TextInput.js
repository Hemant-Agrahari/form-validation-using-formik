import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './FormFields.css';

const TextInput = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  maxLength,
  errors,
  touched,
  required = false 
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        className={errors && touched ? 'error-field' : ''}
      />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default TextInput;

