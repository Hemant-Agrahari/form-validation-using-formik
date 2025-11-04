import React from 'react';
import { Formik, Form } from 'formik';
import { TextInput, PasswordInput } from './FormFields';
import {
  loginSchema,
  loginInitialValues,
} from '../constants';
import './UserForm.css';

const LoginForm = () => {

  // Form submit handler
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Login Data:', values);
    setSubmitting(false);
    alert('Login Successful!');
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="user-form">
            {/* Email */}
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              errors={errors.email}
              touched={touched.email}
              required
            />

            {/* Password */}
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              errors={errors.password}
              touched={touched.password}
              required
            />

            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

