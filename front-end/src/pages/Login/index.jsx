import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AppContext from '../../context/AppContext';
import * as S from './style';

const Login = () => {
  const { 
    email,
    setEmail,
    validLogin,
    setValidLogin,
    validDataLogin,
    password,
    setPassword
  } = useContext(AppContext);

  const history = useHistory();
  const [status, setStatus] = useState('');

  const requestLogin = async () => {
    const body = { email, password };
    const response = await axios.post('http://localhost:8001/login', body); // headers apos ,
    console.log('resposta fetch', response);
    const data = await response.data;
    if (response.status !== 200) {
      setStatus(data.message);
      setValidLogin(false);
      setTimeout(() => setStatus(''), 3500);  
      return setTimeout(() => history.push('/'), 4000) ;
    }
    localStorage.setItem('token', data.token);
      setTimeout(() => history.push('/marvel'), 4000);
      setStatus(`Seja bem-vindo ${data.userLogged.name}!`)
  };
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => validDataLogin(email, password), [email, password])
  return (
    <S.Container>
      <S.Title color="#9d0208">Login</S.Title>
      <S.Status status={ status }>{ status }</S.Status>
      <Input
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <Input
        value={ password }
        type="password"
        onChange={ ({ target }) => setPassword(target.value) }
        name="Senha"
      />
      <S.Buttons>
        <Button
          disabled={ !validLogin }
          onClick={ requestLogin }
        >
          Entrar
        </Button>
        <Button
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </Button>
      </S.Buttons>
    </S.Container>
  );
};

export default Login;