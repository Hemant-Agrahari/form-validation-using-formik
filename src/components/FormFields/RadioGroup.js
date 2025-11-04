import React from 'react';
import { Field, ErrorMessage } from 'formik';
import '../../styles/main.css';

/**
 * 
 * @param {string} label - The label for the radio group
 * @param {string} name - The name of the radio group
 * @param {object[]} options - The options for the radio group
 * @param {boolean} required - Whether the radio group is required
 * @returns radio group component with label, name, options and required props
 */
const RadioGroup = ({ 
  label, 
  name, 
  options,
  required = false 
}) => {
  return (
    <div className="form-group">
      <label>
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="radio-group">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <Field type="radio" name={name} value={option.value} />
            {option.label}
          </label>
        ))}
      </div>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default RadioGroup;

