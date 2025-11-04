import React from 'react';
import { Field, ErrorMessage } from 'formik';
import '../../styles/main.css';

/**
 * 
 * @param {string} label - The label for the checkbox group
 * @param {string} name - The name of the checkbox group
 * @param {object[]} options - The options for the checkbox group
 * @param {boolean} required - Whether the checkbox group is required
 * @returns checkbox group component with label, name, options and required props
 */
const CheckboxGroup = ({ 
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
      <div className="checkbox-group">
        {options.map((option) => (
          <label key={option.value} className="checkbox-label">
            <Field type="checkbox" name={name} value={option.value} />
            {option.label}
          </label>
        ))}
      </div>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default CheckboxGroup;

