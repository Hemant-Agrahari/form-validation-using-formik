import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextInput,
  SelectInput,
  RadioGroup,
  CheckboxGroup,
} from './FormFields';
import './UserForm.css';

/**
 * Example Contact Form - Demonstrating reusable form components
 * This form shows how you can easily create different forms using the same components
 */
const ExampleContactForm = () => {
  // Validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone must be exactly 10 digits')
      .required('Phone number is required'),
    subject: Yup.string().required('Please select a subject'),
    priority: Yup.string().required('Please select priority'),
    services: Yup.array()
      .min(1, 'Select at least one service')
      .required('Services are required'),
  });

  // Initial values
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    priority: '',
    services: [],
  };

  // Options
  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales' },
    { value: 'feedback', label: 'Feedback' },
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  const serviceOptions = [
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Consulting' },
  ];

  // Submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Contact Form Data:', values);
    alert('Contact form submitted successfully!');
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
        Example form using the same reusable components
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="user-form">
            <TextInput
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              errors={errors.fullName}
              touched={touched.fullName}
              required
            />

            <TextInput
              label="Email Address"
              name="email"
              type="text"
              placeholder="Enter your email"
              errors={errors.email}
              touched={touched.email}
              required
            />

            <TextInput
              label="Phone Number"
              name="phone"
              placeholder="Enter 10-digit phone number"
              maxLength="10"
              errors={errors.phone}
              touched={touched.phone}
              required
            />

            <SelectInput
              label="Subject"
              name="subject"
              options={subjectOptions}
              placeholder="Select a subject"
              errors={errors.subject}
              touched={touched.subject}
              required
            />

            <RadioGroup
              label="Priority"
              name="priority"
              options={priorityOptions}
              required
            />

            <CheckboxGroup
              label="Services Interested In"
              name="services"
              options={serviceOptions}
              required
            />

            <div className="form-group">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExampleContactForm;

