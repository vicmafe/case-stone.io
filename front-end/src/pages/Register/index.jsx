import Axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import * as S from './style';
import RegisterForm from '../../components/RegisterForm';
import Button from '../../components/Button';


const Register = () => {
  const { validForm, register } = useContext(AppContext);
  const [status, setStatus] = useState('');
  const saveUser = async () => {
    const { name, email, password } = register;
    const sendDataUser = await Axios.post('http://localhost:3001/register', { name, email, password });
    console.log('retorno request', sendDataUser)
    // if (sendDataUser.data === 'string') {
    //   setStatus('E-mail already in database.');
    //   return 'done';
    // }
    return true;
  };
  useEffect(() => {
    const MaxTime = 2500;
    setTimeout(() => setStatus(''), MaxTime);
  }, [status]);
  return (
    <S.Container>
      <S.Title>Registrar</S.Title>
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