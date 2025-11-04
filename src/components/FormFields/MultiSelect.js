import React from 'react';
import { ErrorMessage } from 'formik';
import Select from 'react-select';
import '../../styles/main.css';

/**
 * 
 * @param {string} label - The label for the multi select
 * @param {string} name - The name of the multi select
 * @param {object[]} options - The options for the multi select
 * @param {object[]} values - The values for the multi select
 * @param {function} setFieldValue - The function to set the value of the multi select
 * @param {string} placeholder - The placeholder for the multi select
 * @param {object} errors - The errors for the multi select
 * @param {object} touched - Whether the multi select has been touched
 * @param {boolean} required - Whether the multi select is required
 * @returns multi select component with label, name, options, values, setFieldValue, placeholder, errors, touched and required props
 */

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

