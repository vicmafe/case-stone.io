import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import Input from '../Input';
import AppContext from '../../context/AppContext';


const Form = () => {
  const { validateRegister } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  useEffect(() => {
    validateRegister(name, email, password);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, password]);
  return (
    <form>
      <Input
        color="#d00000"
        type="text"
        name="Nome"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        dataTestId="signup-name"
      />
      <Input
        color="#d00000"
        type="email"
        name="Email"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        dataTestId="signup-email"
      />
      <Input
        color="#d00000"
        type="password"
        name="Senha"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
        dataTestId="signup-password"
      />
      <Input
        type="checkbox"
        name="Sou usuário Existente"
        onChange={ () => history.push('/login') }
      />
    </form>
  );
};

export default Form;