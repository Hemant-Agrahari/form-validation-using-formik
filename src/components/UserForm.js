import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextInput,
  SelectInput,
  RadioGroup,
  CheckboxGroup,
  MultiSelect,
  DateInput
} from './FormFields';
import {
  userRegistrationSchema,
  userRegistrationInitialValues,
  COUNTRY_OPTIONS,
  GENDER_OPTIONS,
  HOBBY_OPTIONS,
  SKILL_OPTIONS,
} from '../constants';
import './UserForm.css';

const UserForm = () => {

  // Form submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form Data:', values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="form-container">
      <h1>User Registration Form</h1>
      <Formik
        initialValues={userRegistrationInitialValues}
        validationSchema={userRegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className="user-form">
            {/* First Name */}
            <TextInput
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              errors={errors.firstName}
              touched={touched.firstName}
              required
            />

            {/* Last Name */}
            <TextInput
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              errors={errors.lastName}
              touched={touched.lastName}
              required
            />

            {/* Country Dropdown */}
            <SelectInput
              label="Country"
              name="country"
              options={COUNTRY_OPTIONS}
              placeholder="Select a country"
              errors={errors.country}
              touched={touched.country}
              required
            />

            {/* Gender Radio Buttons */}
            <RadioGroup
              label="Gender"
              name="gender"
              options={GENDER_OPTIONS}
              required
            />

            {/* Hobbies Checkboxes */}
            <CheckboxGroup
              label="Hobbies"
              name="hobbies"
              options={HOBBY_OPTIONS}
              required
            />

            {/* Skills Multiselect */}
            <MultiSelect
              label="Skills"
              name="skills"
              options={SKILL_OPTIONS}
              values={values.skills}
              setFieldValue={setFieldValue}
              placeholder="Select your skills..."
              errors={errors.skills}
              touched={touched.skills}
              required
            />

            {/* Date of Birth */}
            <DateInput
              label="Date of Birth"
              name="dateOfBirth"
              errors={errors.dateOfBirth}
              touched={touched.dateOfBirth}
              required
            />

            {/* Mobile Number */}
            <TextInput
              label="Mobile Number"
              name="mobileNo"
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              errors={errors.mobileNo}
              touched={touched.mobileNo}
              required
            />

            {/* Aadhar Card Number */}
            <TextInput
              label="Aadhar Card Number"
              name="aadharCardNo"
              placeholder="Enter 12-digit Aadhar number"
              maxLength="12"
              errors={errors.aadharCardNo}
              touched={touched.aadharCardNo}
              required
            />

            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Form'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
