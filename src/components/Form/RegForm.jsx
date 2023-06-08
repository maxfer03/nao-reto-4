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

// Componente de Formulario de registro

 
// Función de validación. Retorna
// un objeto de errores que serán
// renderizados en caso de que la data
// ingresada sea inválida.
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
      // act es un utility de react
      // que nos permite testear
      // cambios en nuestro state
      act(() => {
        // Al momento del submit, si no hay
        // errores, se envía toda la data
        // ingresada al store y se vuelve
        // accesible de manera global
        dispatch(setName(values.firstName));
        dispatch(setSurname(values.lastName));
        dispatch(setUsername(values.username));
        dispatch(setEmail(values.email));
        dispatch(setPw(values.pw));
        navigate('/')

        // almacenamos el usuario en nuestra DB
        // Si esto esta corriendo de manera local,
        // REACT_APP_API_URL = http://localhost:3001
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

  // generador de configs para
  // nuestro FormInput.jsx
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
