import React from 'react';
import Button from '../../components/Button';
import * as S from './style';
import GetMarvel from '../../services/GetMarvel';
import marvelHerois from '../../marvelHerois.jpg';

const Marvel = () => {
  const fetchMarvel = async (type) => {
    const responseFetch = await GetMarvel(type);
    console.log('o que tem em comics?', responseFetch);
    return responseFetch;
  }
  return (
    <S.Container>
      <S.Image>
        <img src={ marvelHerois } alt=""/>
      </S.Image>
      <S.Title>
        Escolha um dos nossos Produtos:
      </S.Title>
      <S.Buttons>
        <S.ButtonA>
          <Button
            onClick={ () => fetchMarvel('character')}
          >
            character
          </Button>
        </S.ButtonA>
        <S.ButtonB>
          <Button
            onClick={ () => fetchMarvel('comics')}
          >
            Comic
          </Button>
        </S.ButtonB>
      </S.Buttons>
    </S.Container>
  )
};

export default Marvel;
