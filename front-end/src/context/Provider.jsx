import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [register, setRegister] = useState({});
  const [validForm, setValidForm] = useState(false);
  const [validLogin, setValidLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailIsValid = (email) => {
    const expectedFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/;
    return  expectedFormat.test(email);
  };

  const passwordIsValid = (password) => {
    const minLengthPassword = 5;
    if (password.length > minLengthPassword) return true;
    return false;
  };

  const validateRegister = (name, email, password) => {
    const minCharacter = 2;
    if (emailIsValid(email) && name.length > minCharacter && passwordIsValid(password)) {
      setRegister({name, email, password});
      return setValidForm(true);
    }
    return false;
  };

  const validDataLogin = (email, password) => {
    const emailOk = emailIsValid(email);
    const passwordOk = passwordIsValid(password);
    if (emailOk && passwordOk) {
      return setValidLogin(true);
    }
    return false;
  };

  const contextValue = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    validateRegister,
    validForm,
    setValidForm,
    register,
    setRegister,
    validDataLogin,
    validLogin,
    setValidLogin,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.array,
]).isRequired };

export default Provider;
