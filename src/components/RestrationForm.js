import React from "react";
import { Formik, Form } from "formik";
import {
  TextInput,
  SelectInput,
  RadioGroup,
  CheckboxGroup,
  MultiSelect,
  DateInput,
  PasswordInput,
} from "./FormFields";
import {
  userRegistrationSchema,
  userRegistrationInitialValues,
  COUNTRY_OPTIONS,
  GENDER_OPTIONS,
  HOBBY_OPTIONS,
  SKILL_OPTIONS,
} from "../constants";
import "../styles/main.css";

const RestrationForm = () => {
  // Form submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Data:", values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="form-container">
      <h3>Registration Form</h3>
      <Formik
        initialValues={userRegistrationInitialValues}
        validationSchema={userRegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className="user-form">
            <TextInput
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              errors={errors.firstName}
              touched={touched.firstName}
              required
            />

            <TextInput
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              errors={errors.lastName}
              touched={touched.lastName}
              required
            />
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              errors={errors.password}
              touched={touched.password}
              required
            />
            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
              required
            />
            <SelectInput
              label="Country"
              name="country"
              options={COUNTRY_OPTIONS}
              placeholder="Select a country"
              errors={errors.country}
              touched={touched.country}
              required
            />

            <RadioGroup
              label="Gender"
              name="gender"
              options={GENDER_OPTIONS}
              required
            />

            <CheckboxGroup
              label="Hobbies"
              name="hobbies"
              options={HOBBY_OPTIONS}
              required
            />

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

            <DateInput
              label="Date of Birth"
              name="dateOfBirth"
              errors={errors.dateOfBirth}
              touched={touched.dateOfBirth}
              required
            />

            <TextInput
              label="Mobile Number"
              name="mobileNo"
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              errors={errors.mobileNo}
              touched={touched.mobileNo}
              required
            />

            <TextInput
              label="Aadhar Card Number"
              name="aadharCardNo"
              placeholder="Enter 12-digit Aadhar number"
              maxLength="12"
              errors={errors.aadharCardNo}
              touched={touched.aadharCardNo}
              required
            />

            <div className="form-group">
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RestrationForm;
