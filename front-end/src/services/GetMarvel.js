// import { useContext } from 'react';
import axios from 'axios';
// import AppContext from '../context/AppContext';

const GetMarvel = async (type) => {
  // const {
  //   comics,
  //   setComics,
  //   character,
  //   setCharacter
  // } = useContext(AppContext);
  const urlCharacter = 'https://gateway.marvel.com:443/v1/public/characters?apikey=8ef984a740be029095f063b36cdc25fa&hash=cefccf07050d91d30ff2cb24fc8b1898a482740e'
  const urlComics = 'https://gateway.marvel.com:443/v1/public/comics?apikey=8ef984a740be029095f063b36cdc25fa&hash=cefccf07050d91d30ff2cb24fc8b1898a482740e'
  if (type === 'character') {
    const response = await axios.get(urlCharacter);
    console.log('response em getMarvel:', response);
    return response;
  }
  const response = await axios.get(urlComics);
  console.log('response em getMarvel:', response);
  return response;
};

export default GetMarvel; 