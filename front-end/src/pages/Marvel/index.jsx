import React, { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Button from '../../components/Button';
import * as S from './style';
import marvelHerois from '../../marvelHerois.jpg';

const Marvel = () => {
  const [products, setProducts] = useState([])
  const { comics, characters } = useContext(AppContext);
  const fetchMarvel = async (type) => {
    if (type === 'character') return setProducts(characters);
    console.log('o q é o product dentro do if', products);
    return setProducts(comics);
  }
  console.log('o que é product fora do if', products);
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
      {!products ? <div></div> : products.map((product, index) => (
        <S.Card key={index}>
          <S.Text>
            {product.name}
          </S.Text>
        </S.Card>
      ))}
    </S.Container>
  )
};

export default Marvel;
