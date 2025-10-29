/**
 * Validation Schemas
 * Centralized Yup validation schemas for forms
 */
import * as Yup from 'yup';

// User Registration Form Validation Schema
export const userRegistrationSchema = Yup.object({
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

// Common validation rules (reusable)
export const ValidationRules = {
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone must be exactly 10 digits')
    .required('Phone number is required'),
  
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  
  aadharCard: Yup.string()
    .matches(/^[0-9]{12}$/, 'Aadhar card number must be exactly 12 digits')
    .required('Aadhar card number is required'),
  
  panCard: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN card format')
    .required('PAN card number is required'),
};

