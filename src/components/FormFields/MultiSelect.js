import React from 'react';
import { ErrorMessage } from 'formik';
import Select from 'react-select';
import './FormFields.css';

const MultiSelect = ({ 
  label, 
  name, 
  options,
  values,
  setFieldValue,
  placeholder = 'Select options...',
  errors,
  touched,
  required = false 
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      <Select
        id={name}
        name={name}
        options={options}
        isMulti
        value={options.filter(option => values.includes(option.value))}
        onChange={(selectedOptions) => {
          const selectedValues = selectedOptions 
            ? selectedOptions.map(option => option.value)
            : [];
          setFieldValue(name, selectedValues);
        }}
        className={errors && touched ? 'error-field' : ''}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default MultiSelect;

