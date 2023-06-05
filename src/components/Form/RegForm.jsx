import React from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  setName,
  setSurname,
  setUsername, 
  setEmail,
  setPw
} from '../../redux/store';
import FormInput from './FormInput';
import './RegForm.scss'
import { act } from 'react-dom/test-utils';

 
 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 20) {
    errors.username = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.pw) {
    errors.pw = 'Required';
  } else if (values.pw.length > 20) {
    errors.pw = 'Must be 20 characters or less';
  }

  return errors;
};

const RegForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      pw: '',
    },
    validate,
    onSubmit: values => {
      act(() => {
        dispatch(setName(values.firstName));
        dispatch(setSurname(values.lastName));
        dispatch(setUsername(values.username));
        dispatch(setEmail(values.email));
        dispatch(setPw(values.pw));
        navigate('/')
        fetch(`${process.env.REACT_APP_API_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
      })
    },
  });

  const inputConfigs = (name, label, type = 'text') => {
    const configs = {
      onChange: formik.handleChange,
      value: formik.values[name],
      errors: formik.errors[name],
      type: type,
      name: name,
      label: label
    }
    return configs
  } 
  return (
    <form
    data-testid='register-form'
    onSubmit={formik.handleSubmit}>
      <FormInput
      config={inputConfigs('firstName', 'Name')}
      />
      <FormInput
      config={inputConfigs('lastName', 'Surname')}
      />
      <FormInput
      config={inputConfigs('username', 'Username')}
      />
      <FormInput
      config={inputConfigs('email', 'Email Address', 'email')}
      />
      <FormInput
      config={inputConfigs('pw', 'Password', 'password')}
      />
      <button className='btn btn-sm' type="submit">Submit</button>
    </form>
  );
};

export default RegForm
