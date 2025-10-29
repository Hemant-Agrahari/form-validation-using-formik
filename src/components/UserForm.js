import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
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
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className={errors.firstName && touched.firstName ? 'error-field' : ''}
              />
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className={errors.lastName && touched.lastName ? 'error-field' : ''}
              />
              <ErrorMessage name="lastName" component="div" className="error-message" />
            </div>

            {/* Dropdown - Country */}
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <Field
                as="select"
                id="country"
                name="country"
                className={errors.country && touched.country ? 'error-field' : ''}
              >
                <option value="">Select a country</option>
                <option value="india">India</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
              </Field>
              <ErrorMessage name="country" component="div" className="error-message" />
            </div>

            {/* Radio Button - Gender */}
            <div className="form-group">
              <label>Gender *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label className="radio-label">
                  <Field type="radio" name="gender" value="female" />
                  Female
                </label>
                <label className="radio-label">
                  <Field type="radio" name="gender" value="other" />
                  Other
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="error-message" />
            </div>

            {/* Checkbox - Hobbies */}
            <div className="form-group">
              <label>Hobbies *</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <Field type="checkbox" name="hobbies" value="reading" />
                  Reading
                </label>
                <label className="checkbox-label">
                  <Field type="checkbox" name="hobbies" value="traveling" />
                  Traveling
                </label>
                <label className="checkbox-label">
                  <Field type="checkbox" name="hobbies" value="sports" />
                  Sports
                </label>
                <label className="checkbox-label">
                  <Field type="checkbox" name="hobbies" value="music" />
                  Music
                </label>
                <label className="checkbox-label">
                  <Field type="checkbox" name="hobbies" value="gaming" />
                  Gaming
                </label>
              </div>
              <ErrorMessage name="hobbies" component="div" className="error-message" />
            </div>

            {/* Multiselect - Skills */}
            <div className="form-group">
              <label htmlFor="skills">Skills * (Select multiple)</label>
              <Select
                id="skills"
                name="skills"
                options={skillOptions}
                isMulti
                value={skillOptions.filter(option => 
                  values.skills.includes(option.value)
                )}
                onChange={(selectedOptions) => {
                  const values = selectedOptions 
                    ? selectedOptions.map(option => option.value)
                    : [];
                  setFieldValue('skills', values);
                }}
                className={errors.skills && touched.skills ? 'error-field' : ''}
                placeholder="Select your skills..."
              />
              <ErrorMessage name="skills" component="div" className="error-message" />
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth *</label>
              <Field
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className={errors.dateOfBirth && touched.dateOfBirth ? 'error-field' : ''}
              />
              <ErrorMessage name="dateOfBirth" component="div" className="error-message" />
            </div>

            {/* Mobile Number */}
            <div className="form-group">
              <label htmlFor="mobileNo">Mobile Number *</label>
              <Field
                type="text"
                id="mobileNo"
                name="mobileNo"
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                className={errors.mobileNo && touched.mobileNo ? 'error-field' : ''}
              />
              <ErrorMessage name="mobileNo" component="div" className="error-message" />
            </div>

            {/* Aadhar Card Number */}
            <div className="form-group">
              <label htmlFor="aadharCardNo">Aadhar Card Number *</label>
              <Field
                type="text"
                id="aadharCardNo"
                name="aadharCardNo"
                placeholder="Enter 12-digit Aadhar number"
                maxLength="12"
                className={errors.aadharCardNo && touched.aadharCardNo ? 'error-field' : ''}
              />
              <ErrorMessage name="aadharCardNo" component="div" className="error-message" />
            </div>

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

