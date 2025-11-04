import React from 'react';
import { Field, ErrorMessage } from 'formik';
import '../../styles/main.css';

/**
 * 
 * @param {string} label - The label for the text input
 * @param {string} name - The name of the text input
 * @param {string} type - The type of the text input
 * @param {string} placeholder - The placeholder for the text input
 * @param {number} maxLength - The maximum length for the text input
 * @param {object} errors - The errors for the text input
 * @param {object} touched - Whether the text input has been touched
 * @param {boolean} required - Whether the text input is required
 * @returns text input component with label, name, type, placeholder, maxLength, errors, touched and required props
 */

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

