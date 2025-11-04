import React from 'react';
import { Field, ErrorMessage } from 'formik';
import '../../styles/main.css';

/**
 * 
 * @param {string} label - The label for the select input
 * @param {string} name - The name of the select input
 * @param {object[]} options - The options for the select input
 * @param {string} placeholder - The placeholder for the select input
 * @param {object} errors - The errors for the select input
 * @param {object} touched - Whether the select input has been touched
 * @param {boolean} required - Whether the select input is required
 * @returns select input component with label, name, options, placeholder, errors, touched and required props
 */

const SelectInput = ({ 
  label, 
  name, 
  options, 
  placeholder = 'Select an option',
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
        as="select"
        id={name}
        name={name}
        className={errors && touched ? 'error-field' : ''}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default SelectInput;

