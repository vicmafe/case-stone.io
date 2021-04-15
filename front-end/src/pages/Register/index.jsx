import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../../context/AppContext';
import * as S from './style';
import RegisterForm from '../../components/RegisterForm';
import Button from '../../components/Button';


const Register = () => {
  const { validForm, setValidForm, register } = useContext(AppContext);
  const [status, setStatus] = useState('');
  const history = useHistory();
  const saveUser = async () => {
    const { name, email, password } = register;
    console.log('register:', register);
    const sendDataUser = await Axios
      .post('http://localhost:8001/register', { name, email, password });
    console.log('retorno request', sendDataUser)
    if (sendDataUser.status !== 201) {
      setValidForm(false);
      setTimeout(() => history.push('/'),4000);
      return setStatus(sendDataUser.data.message);
    }
    setStatus(sendDataUser.data.message)
    setTimeout(() => history.push('/login'),3700)
    return setTimeout(() => setStatus(''), 4000);
  };

  return (
    <S.Container>
      <S.Title>Registre-se</S.Title>
      <S.Status status={ status }>{ status }</S.Status>
      <RegisterForm />
      <S.Buttons>
        <Button
          onClick={ saveUser }
          disabled={ !validForm }
        >
          Cadastrar
        </Button>
      </S.Buttons>

    </S.Container>
  );
};

export default Register;