# Form Validation Using Formik

A comprehensive React form with validation using Formik and Yup. This form includes various input types and proper validation.

## Features

✅ **First Name & Last Name** - Text inputs with validation  
✅ **Country Dropdown** - Select country from dropdown  
✅ **Gender Radio Buttons** - Male, Female, Other options  
✅ **Hobbies Checkboxes** - Multiple checkbox selection  
✅ **Skills Multiselect** - React-Select component for multiple skills  
✅ **Date of Birth** - Date picker with validation  
✅ **Mobile Number** - 10-digit validation  
✅ **Aadhar Card Number** - 12-digit validation  

## Technologies Used

- **React 18** - Frontend framework
- **Formik** - Form management
- **Yup** - Schema validation
- **React-Select** - Multiselect dropdown
- **Webpack** - Module bundler
- **Babel** - JavaScript compiler

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open automatically at `http://localhost:3000`

## Building for Production

Create a production build:
```bash
npm run build
```

The build files will be generated in the `dist` folder.

## Form Validation Rules

- **First Name**: 2-50 characters, required
- **Last Name**: 2-50 characters, required
- **Country**: Must select a country
- **Gender**: Must select one option
- **Hobbies**: Must select at least one hobby
- **Skills**: Must select at least one skill
- **Date of Birth**: Cannot be in the future, required
- **Mobile Number**: Exactly 10 digits, required
- **Aadhar Card**: Exactly 12 digits, required

## Project Structure

```
form-validation-using-formik/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserForm.js
│   │   └── UserForm.css
│   ├── App.js
│   └── index.js
├── .babelrc
├── webpack.config.js
├── package.json
└── README.md
```

## Form Submission

On successful form submission:
- Form data is logged to the browser console
- An alert message is displayed
- All validation errors are cleared

## Customization

You can easily customize:
- Country options in the dropdown
- Hobby options in checkboxes
- Skill options in multiselect
- Validation rules in the Yup schema
- Styling in UserForm.css

## License

ISC
