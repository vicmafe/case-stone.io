import React from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Button from '../../components/Button';
import * as S from './style';
import marvelHerois from '../../marvelHerois.jpg';
import { useHistory } from 'react-router-dom';

const Marvel = () => {
  const { setSearchMArvel } = useContext(AppContext);
  const history = useHistory();
  const fetchMarvel = async (type) => {
    if (type === 'character') {
      setSearchMArvel('characters');
      return history.pushState('/characters');
    }
    setSearchMArvel('comics');
    return history.pushState('/comics');
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
            onClick={ () => fetchMarvel('comics')}
          >
            Comic
          </Button>
        </S.ButtonA>
        <S.ButtonB>
          <Button
            onClick={ () => fetchMarvel('characters')}
          >
            character
          </Button>
        </S.ButtonB>
      </S.Buttons>
    </S.Container>
  )
};

export default Marvel;
