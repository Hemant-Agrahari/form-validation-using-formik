import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './FormFields.css';

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

