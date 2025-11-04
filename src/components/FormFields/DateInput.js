import React from 'react';
import { Field, ErrorMessage } from 'formik';
import '../../styles/main.css';

/**
 * 
 * @param {string} label - The label for the date input
 * @param {string} name - The name of the date input
 * @param {object} errors - The errors for the date input
 * @param {object} touched - Whether the date input has been touched
 * @param {boolean} required - Whether the date input is required
 * @returns date input component with label, name, errors, touched and required props
 */
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

