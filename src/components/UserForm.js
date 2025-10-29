import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextInput,
  SelectInput,
  RadioGroup,
  CheckboxGroup,
  MultiSelect,
  DateInput
} from './FormFields';
import './UserForm.css';

const UserForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must be less than 50 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name must be less than 50 characters')
      .required('Last name is required'),
    country: Yup.string().required('Please select a country'),
    gender: Yup.string().required('Please select a gender'),
    hobbies: Yup.array()
      .min(1, 'Select at least one hobby')
      .required('Hobbies are required'),
    skills: Yup.array()
      .min(1, 'Select at least one skill')
      .required('Skills are required'),
    dateOfBirth: Yup.date()
      .max(new Date(), 'Date of birth cannot be in the future')
      .required('Date of birth is required'),
    mobileNo: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
    aadharCardNo: Yup.string()
      .matches(/^[0-9]{12}$/, 'Aadhar card number must be exactly 12 digits')
      .required('Aadhar card number is required'),
  });

  // Initial form values
  const initialValues = {
    firstName: '',
    lastName: '',
    country: '',
    gender: '',
    hobbies: [],
    skills: [],
    dateOfBirth: '',
    mobileNo: '',
    aadharCardNo: '',
  };

  // Options for dropdown
  const countryOptions = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
  ];

  // Options for radio buttons
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  // Options for checkboxes
  const hobbyOptions = [
    { value: 'reading', label: 'Reading' },
    { value: 'traveling', label: 'Traveling' },
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'gaming', label: 'Gaming' },
  ];

  // Options for multiselect
  const skillOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'css', label: 'CSS' },
    { value: 'html', label: 'HTML' },
  ];

  // Form submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form Data:', values);
    alert('Form submitted successfully! Check console for details.');
    setSubmitting(false);
    // Reset the form after successful submission
    resetForm();
  };

  return (
    <div className="form-container">
      <h1>User Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
              options={countryOptions}
              placeholder="Select a country"
              errors={errors.country}
              touched={touched.country}
              required
            />

            {/* Gender Radio Buttons */}
            <RadioGroup
              label="Gender"
              name="gender"
              options={genderOptions}
              required
            />

            {/* Hobbies Checkboxes */}
            <CheckboxGroup
              label="Hobbies"
              name="hobbies"
              options={hobbyOptions}
              required
            />

            {/* Skills Multiselect */}
            <MultiSelect
              label="Skills"
              name="skills"
              options={skillOptions}
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
