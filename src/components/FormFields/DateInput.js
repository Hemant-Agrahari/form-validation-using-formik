import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './FormFields.css';

const DateInput = ({ 
  label, 
  name,
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
        type="date"
        id={name}
        name={name}
        className={errors && touched ? 'error-field' : ''}
      />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default DateInput;

