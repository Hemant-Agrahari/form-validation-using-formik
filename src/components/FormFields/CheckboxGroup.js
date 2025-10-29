import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './FormFields.css';

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

